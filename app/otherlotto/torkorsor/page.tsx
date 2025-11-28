"use client";

import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const API_URL = "https://baac-lotto-api-s8ys.vercel.app/api";

interface PrizeGroupType {
  title: string;
  numbers: string[];
}

interface LottoData {
  slug: string;
  date: string;
  set_name: string;
  prizes: Record<string, PrizeGroupType>;
}

export default function Page() {
  const [data, setData] = useState<LottoData | null>(null);
  const [loading, setLoading] = useState(true);

  // ======= ตั้งค่า slug ที่ต้องการดึง =======
  const slug = "torkorsor"; // ← เปลี่ยนได้ตามต้องการ
  // ======================================

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${API_URL}/${slug}`);
        const json = await res.json();
        setData(json);
      } catch (error) {
        console.error("Error fetching API:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader2 className="h-8 w-8 animate-spin text-green-700" />
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen flex justify-center items-center text-red-600">
        ข้อมูลไม่ถูกต้อง หรือ API มีปัญหา
      </div>
    );
  }

  const { set_name, prizes } = data;

  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <div className="w-full max-w-6xl bg-linear-to-b bg-gray-100 flex flex-col items-center p-4 font-sans mx-auto min-h-screen">

        {/* Header */}
        <h1 className="text-xl md:text-4xl font-extrabold text-green-800 text-center mb-2">
          {set_name}
        </h1>
        <p className="text-center text-sm text-gray-500 mb-6">
          (กรุณาตรวจสอบความถูกต้องอีกครั้ง)
        </p>

        {/* Prize Groups */}
        <div className="w-full max-w-5xl space-y-8">
          {Object.keys(prizes).map((key) => {
            const prize = prizes[key];

            return (
              <PrizeGroup
                key={key}
                title={prize.title}
                numbers={prize.numbers}
              />
            );
          })}
        </div>

      </div>
    </div>
  );
}

/* ------------------------------
   PrizeGroup Component (Card)
-------------------------------- */
const PrizeGroup = ({
  title,
  numbers,
}: {
  title: string;
  numbers: string[];
}) => {
  return (
    <div>
      <div className="bg-green-200 rounded-2xl py-1 px-4 shadow-sm">
        <p className="font-bold text-lg text-center">{title}</p>
        <p className="font-bold text-sm text-center mb-1">
          จำนวน {numbers.length} รายการ
        </p>
      </div>

      {/* Single number → Big Box */}
      {numbers.length === 1 ? (
        <div className="flex justify-center">
          <div className="mt-4 text-3xl font-extrabold text-red-600 text-center">
            {numbers[0]}
          </div>
        </div>
      ) : (
        /* Multi-number grid */
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
          {numbers.map((n, i) => (
            <span
              key={i}
              className="p-2 text-lg font-semibold text-center"
            >
              {n}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
