"use client"

import React, { useState, useEffect } from "react";
import { Loader2, Search } from "lucide-react";

const API_URL = "https://lotto-result-api.vercel.app/data/lotto_result.json";

const thaiMonths = [
  "มกราคม", "กุมภาพันธ์", "มีนาคม", "เมษายน", "พฤษภาคม", "มิถุนายน",
  "กรกฎาคม", "สิงหาคม", "กันยายน", "ตุลาคม", "พฤศจิกายน", "ธันวาคม"
];

function formatThaiDate(dateString: string): string {
  const [year, month, day] = dateString.split("-").map(Number);
  return `${day} ${thaiMonths[month - 1]} ${year + 543}`;
}

interface LottoResult {
  date: string;
  draw_number: string;
  results: {
    first_prize: string;
    near_first_prize: string[];
    second_prizes: string[];
    third_prizes: string[];
    fourth_prizes: string[];
    fifth_prizes: string[];
    three_digit_front: string[];
    three_digit_back: string[];
    two_digit_back: string;
  };
}

export default function LottoChecker() {
  const [allResults, setAllResults] = useState<LottoResult[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [lottoNumber, setLottoNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [prizeState, setPrizeState] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadHistory = async () => {
      try {
        const res = await fetch(API_URL);
        const json = await res.json();
        setAllResults(json);
        if (json.length > 0) setSelectedDate(json[0].date);
      } catch {
        setError("โหลดข้อมูลไม่สำเร็จ");
      }
    };
    loadHistory();
  }, []);

  const handleNumberInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/[^0-9]/g, "");
    if (digits.length <= 6) {
      setLottoNumber(digits);
      setPrizeState(null);
      setError(null);
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedDate(e.target.value);
    setPrizeState(null);
    setError(null);
  };

  const checkPrize = () => {
    if (lottoNumber.length !== 6) {
      setError("กรุณากรอกเลขสลาก 6 หลักให้ครบ");
      setPrizeState(null);
      return;
    }

    setError(null);
    setLoading(true);

    setTimeout(() => {
      const result = allResults.find(r => r.date === selectedDate);
      if (!result) {
        setError("ไม่พบผลรางวัลของงวดนี้");
        setPrizeState(null);
        setLoading(false);
        return;
      }

      const R = result.results;
      let prize: string | null = null;

      if (lottoNumber === R.first_prize) prize = "รางวัลที่ 1";
      else if (R.near_first_prize.includes(lottoNumber)) prize = "รางวัลข้างเคียงรางวัลที่ 1";
      else if (R.second_prizes.includes(lottoNumber)) prize = "รางวัลที่ 2";
      else if (R.third_prizes.includes(lottoNumber)) prize = "รางวัลที่ 3";
      else if (R.fourth_prizes.includes(lottoNumber)) prize = "รางวัลที่ 4";
      else if (R.fifth_prizes.includes(lottoNumber)) prize = "รางวัลที่ 5";
      else if (R.three_digit_front.includes(lottoNumber.slice(0, 3))) prize = "เลขหน้า 3 ตัว";
      else if (R.three_digit_back.includes(lottoNumber.slice(3, 6))) prize = "เลขท้าย 3 ตัว";
      else if (R.two_digit_back === lottoNumber.slice(4, 6)) prize = "เลขท้าย 2 ตัว";

      setPrizeState(prize || "no");
      setLoading(false);
    }, 500);
  };

  const resultData = allResults.find(r => r.date === selectedDate);

  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <div className="w-full max-w-6xl bg-linear-to-b bg-gray-100 flex flex-col items-center p-4 font-sans mx-auto min-h-screen">

        {/* Header */}
        <h1 className="text-xl md:text-4xl font-extrabold text-purple-800 text-center mb-6">
          ตรวจผลสลากกินแบ่งรัฐบาล
        </h1>

        {/* Input zone */}
        <div className="w-full flex flex-col lg:flex-row lg:justify-center lg:gap-6 lg:items-center mb-6">
          <select
            className="w-full max-w-xs px-4 py-3 border rounded-full text-center text-lg text-gray-800 shadow-sm bg-white mb-3 lg:mb-0"
            value={selectedDate}
            onChange={handleDateChange}
          >
            {allResults.map((item, index) => (
              <option key={index} value={item.date}>
                {formatThaiDate(item.date)}
              </option>
            ))}
          </select>

          <input
            type="text"
            value={lottoNumber}
            onChange={handleNumberInput}
            placeholder="กรอกเลขสลาก 6 หลัก"
            className="w-full max-w-xs px-4 py-3 border rounded-full text-center text-lg text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all mb-3 lg:mb-0"
          />

          <button
            onClick={checkPrize}
            disabled={loading || lottoNumber.length !== 6}
            className={`flex items-center justify-center w-full max-w-xs px-6 py-3 rounded-full text-base font-bold shadow-md transition-all duration-300 active:scale-95
            ${loading || lottoNumber.length !== 6 ? "bg-gray-400 text-white cursor-not-allowed" : "bg-purple-600 text-white hover:bg-purple-700"}`}
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" /> กำลังตรวจสอบ...
              </>
            ) : (
              <>
                <Search className="w-5 h-5 mr-2" /> ตรวจรางวัล
              </>
            )}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mt-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-md max-w-xs text-center mx-auto text-sm">
            {error}
          </div>
        )}

        {/* Prize */}
        {prizeState && prizeState !== "no" && !error && (
          <div className="mt-4 p-4 rounded-lg max-w-xs mx-auto text-center text-white font-bold bg-green-600 mb-4">
            ยินดีด้วย! คุณถูกรางวัล
            <p className="p-1 text-xl font-semibold">{prizeState}</p>
          </div>
        )}

        {/* no prize */}
        {prizeState === "no" && !error && (
          <div className="mt-4 p-4 rounded-lg max-w-xs mx-auto text-center text-white font-bold bg-red-600 mb-4">
            เสียใจด้วย! คุณไม่ถูกรางวัล
          </div>
        )}

        {/* Result Section */}
        {resultData && (
          <div className="w-full max-w-5xl mx-auto mt-5">
            <div className="text-center mb-6">
              <p className="font-bold text-2xl md:text-4xl text-red-500 mb-6">
                <span className="mr-5">รางวัลที่ 1</span>
                <span className="font-semibold">{resultData.results.first_prize}</span>
              </p>

              <p className="font-bold text-lg">รางวัลข้างเคียงรางวัลที่ 1</p>
              <div>
                <span className="p-2 text-2xl font-semibold mr-2">{resultData.results.near_first_prize[0]}</span>
                <span className="p-2 text-2xl font-semibold ml-2">{resultData.results.near_first_prize[1]}</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm lg:text-base mb-6">
              <div className="text-center">
                <p className="font-bold text-lg">เลขหน้า 3 ตัว</p>
                <span className="p-2 text-2xl font-semibold mr-2">{resultData.results.three_digit_front[0]}</span>
                <span className="p-2 text-2xl font-semibold ml-2">{resultData.results.three_digit_front[1]}</span>
              </div>

              <div className="text-center">
                <p className="font-bold text-lg">เลขท้าย 3 ตัว</p>
                <span className="p-2 text-2xl font-semibold mr-2">{resultData.results.three_digit_back[0]}</span>
                <span className="p-2 text-2xl font-semibold ml-2">{resultData.results.three_digit_back[1]}</span>
              </div>

              <div className="col-span-2 text-center">
                <p className="font-bold text-lg">เลขท้าย 2 ตัว</p>
                <span className="p-2 text-2xl font-semibold">{resultData.results.two_digit_back}</span>
              </div>
            </div>

            <div className="space-y-6">
              <PrizeSection title="รางวัลที่ 2" amount="200,000" list={resultData.results.second_prizes} />
              <PrizeSection title="รางวัลที่ 3" amount="80,000" list={resultData.results.third_prizes} />
              <PrizeSection title="รางวัลที่ 4" amount="40,000" list={resultData.results.fourth_prizes} />
              <PrizeSection title="รางวัลที่ 5" amount="20,000" list={resultData.results.fifth_prizes} />
            </div>

          </div>
        )}
      </div>
    </div>
  );
};

const PrizeSection = ({ title, amount, list }: { title: string; amount: string; list: string[] }) => (
  <div>
    <div className="bg-amber-100 rounded-2xl">
      <p className="font-bold text-lg text-center ">{title} มี {list.length} รางวัล</p>
      <p className="font-bold text-lg text-center mb-3">รางวัลละ {amount} บาท</p>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 text-center">
      {list.map((n, i) => (
        <span key={i} className="p-2 text-lg font-semibold">{n}</span>
      ))}
    </div>
  </div>
);
