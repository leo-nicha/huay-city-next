"use client";

import React, { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const API_URL = "https://gsb-lotto-api.vercel.app/api";

interface PrizeItem {
  period?: number;
  code?: string;
  number?: string;
}

interface PrizeGroup {
  title: string;
  times?: number;
  winners?: number;
  reward?: number;
  items?: PrizeItem[];
  numbers?: string[];
  total_groups?: {
    period_range: string;
    winners: number;
    reward: number;
  }[];
}

interface LottoData {
  set_name: string;
  date: string;
  slug: string;
  lottery_name: string;
  unit_price: number;
  prizes: Record<string, PrizeGroup>;
}

export default function Page() {
  const [data, setData] = useState<LottoData | null>(null);
  const [loading, setLoading] = useState(true);

  const slug = "aomsin";

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`${API_URL}/${slug}`);
        const json = await res.json();

        if (Array.isArray(json) && json.length > 0) {
          setData(json[0]); // API ส่งเป็น array
        } else {
          setData(null);
        }
      } catch (error) {
        console.error("Error fetching API:", error);
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader2 className="h-8 w-8 animate-spin text-pink-700" />
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

  return (
    <div className="min-h-screen bg-gray-100 w-full">
      <div className="w-full max-w-5xl mx-auto p-4 font-sans">

        <h1 className="text-2xl md:text-4xl font-extrabold text-pink-700 text-center mb-2">
          {data.lottery_name}
        </h1>

        <p className="text-center text-sm text-gray-500 mb-6">
          งวดวันที่ {data.date} - กรุณาตรวจสอบความถูกต้องอีกครั้ง
        </p>

        <div className="space-y-6">
          {Object.keys(data.prizes).map((key) => {
            const prize = data.prizes[key];
            return <PrizeGroupCard key={key} prize={prize} />;
          })}
        </div>

      </div>
    </div>
  );
}

/* =========================================
   Component แสดงกลุ่มรางวัลครบทุกกรณี
========================================= */
function PrizeGroupCard({ prize }: { prize: PrizeGroup }) {
  const { title, items, numbers, total_groups, reward, winners } = prize;

  return (
    <div className="bg-white p-4 shadow rounded-xl">
      <p className="text-xl font-bold text-pink-700 text-center">{title}</p>

      {/* ข้อมูลรางวัล */}
      {reward && (
        <p className="text-sm text-center text-gray-600">
          รางวัล {reward.toLocaleString()} บาท
        </p>
      )}
      {winners && (
        <p className="text-sm text-center text-gray-600">
          ผู้ถูกรางวัล {winners.toLocaleString()} ราย
        </p>
      )}

      {/* กรณี items (มี period, code, number) */}
      {items && (
        <div className="mt-4 space-y-3">
          {items.map((it, index) => (
            <div key={index} className="bg-pink-100 p-3 rounded-lg text-center">
              <p className="font-semibold text-2xl text-red-600">{it.number}</p>
              <p className="text-sm text-gray-600">
                งวดที่: {it.period} | ตัวอักษร: {it.code}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* กรณีกลุ่ม total_groups เช่น เลขท้าย 3 ตัว */}
      {total_groups && (
        <div className="mt-4 space-y-3">
          {total_groups.map((g, i) => (
            <div
              key={i}
              className="bg-pink-50 p-3 rounded-lg text-sm text-center"
            >
              <p>ช่วงงวด: {g.period_range}</p>
              <p>ผู้ถูกรางวัล: {g.winners.toLocaleString()}</p>
              <p>รางวัล {g.reward} บาท</p>
            </div>
          ))}
        </div>
      )}

      {/* กรณี numbers ปกติ */}
      {numbers && (
        <div className="">
          <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mt-4">
            {numbers.map((n, i) => (
              <div
                key={i}
                className="bg-pink-100 p-2 rounded-lg text-center font-bold"
              >
                {n}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
