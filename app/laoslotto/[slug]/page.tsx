"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getLaosLottoByDate } from "@/lib/getLaosLotto";

interface LaosLottoDraw {
  date: string;
  subtitle?: string;
  four_digit: string;
  three_digit_top: string;
  two_digit_top: string;
  zodiac_animal: string;
  additional_numbers: string[];
}

export default function LaosLottoDetail() {
  const { slug } = useParams();
  const [draw, setDraw] = useState<LaosLottoDraw | null>(null);

  useEffect(() => {
    const result = getLaosLottoByDate(slug as string);
    setDraw(result);
  }, [slug]);

  if (!draw)
    return (
      <div className="p-4 text-center text-red-500">
        ไม่พบข้อมูลประจำวันที่: {slug}
      </div>
    );

  return (
    <div className=" flex justify-center">
      <div className="w-full max-w-2xl shadow-xl p-4 sm:p-6 border border-gray-300 bg-white">
        <h1 className="text-xl sm:text-2xl font-bold text-red-600 text-center mb-6">
          ผลหวยลาว {draw.date}
        </h1>

        {/* ผลรางวัล */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 bg-gray-100">

          {/* เลขท้าย 4 ตัว */}
          <div className="border border-gray-300">
            <div className="bg-gray-200 border-b border-gray-300 py-2 text-center text-sm font-semibold text-gray-700">
              เลขท้าย 4 ตัว
            </div>
            <div className="p-6 text-center">
              <span className="text-6xl font-black text-red-600 tracking-wide">
                {draw.four_digit}
              </span>
            </div>
          </div>

          {/* กล่องเลข 3 / 2 ตัว + นามสัตว์ */}
          <div className="border border-gray-300 flex flex-col">

            <div className="bg-gray-200 border-b border-gray-300 py-2 text-center text-sm font-semibold text-gray-700">
              นามสัตว์: <span className="font-bold">{draw.zodiac_animal}</span>
            </div>

            <div className="flex flex-1">
              <div className="w-1/2 p-4 text-center border-r border-gray-300">
                <p className="text-xs font-semibold text-gray-600 mb-1">เลขท้าย 3 ตัว</p>
                <p className="text-4xl font-black text-gray-800">{draw.three_digit_top}</p>
              </div>

              <div className="w-1/2 p-4 text-center">
                <p className="text-xs font-semibold text-gray-600 mb-1">เลขท้าย 2 ตัว</p>
                <p className="text-4xl font-black text-gray-800">{draw.two_digit_top}</p>
              </div>
            </div>

          </div>

        </div>

        {/* หวยลาวพัฒนา */}
        <div className="border border-gray-300">
          <div className="bg-gray-200 border-b border-gray-300 py-2 text-center text-sm font-semibold">
            หวยลาวพัฒนา
          </div>
          <div className="flex justify-around items-center p-4">
            {draw.additional_numbers.map((num, idx) => (
              <span key={idx} className="text-2xl sm:text-3xl font-black text-gray-800">
                {num}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
