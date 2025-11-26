"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getHanoiType } from "@/lib/getHanoiLotto";

type HanoiType = "special" | "normal" | "vip";

interface HanoiResultItem {
  date: string;
  "4d": string;
  "3d": string;
  "2d_top": string;
  "2d_bottom": string;
}

interface HanoiResultRow extends HanoiResultItem {
  isLatest: boolean;
}

export default function HanoiLottoDetail() {
  const { slug } = useParams();
  const [items, setItems] = useState<HanoiResultRow[] | null>(null);

  useEffect(() => {
    const type = slug as HanoiType;

    if (type === "special" || type === "normal" || type === "vip") {
      const data = getHanoiType(type);

      const mapped: HanoiResultRow[] = data.map((item, index) => ({
        ...item,
        isLatest: index === 0, // index 0 คือรายการล่าสุด
      }));

      setItems(mapped);
    } else {
      setItems(null);
    }
  }, [slug]);

  if (!items)
    return (
      <div className="p-4 text-center text-red-500">
        ไม่พบข้อมูลประเภท: {slug}
      </div>
    );

  const headerClasses =
    "px-3 py-3 text-xs sm:text-sm font-semibold border border-gray-700 text-center";

  const cellBaseClasses =
    "px-3 py-3 text-xs sm:text-sm border border-gray-700 text-center";

  return (
    <div className=" flex justify-center">
      <div className="w-full max-w-2xl shadow-xl p-4 sm:p-6 border border-gray-300">
        <div className="w-full max-w-2xl overflow-x-auto shadow-2xl">
          <table className="min-w-full border-collapse">
            <thead>
              <tr className="bg-[#1D2331] text-white">
                <th className={headerClasses}>วันที่</th>
                <th className={headerClasses}>4 ตัว</th>
                <th className={headerClasses}>3 ตัว</th>
                <th className={headerClasses}>2 บน</th>
                <th className={headerClasses}>2 ล่าง</th>
              </tr>
            </thead>

            <tbody>
              {items.map((row, index) => (
                <tr
                  key={row.date}
                  className={`
                  ${index % 2 === 0 ? "bg-gray-300" : "bg-gray-200"}
                  ${row.isLatest
                      ? "border-t-4 border-red-500"
                      : "border-t border-gray-700"
                    }
                  text-black
                `}
                >
                  <td className={`${cellBaseClasses} font-mono`}>
                    {row.date}
                  </td>

                  <td
                    className={`${cellBaseClasses} font-extrabold ${row.isLatest ? "text-red-500" : "text-black"
                      }`}
                  >
                    {row["4d"]}
                  </td>

                  <td
                    className={`${cellBaseClasses} font-extrabold ${row.isLatest ? "text-red-500" : "text-black"
                      }`}
                  >
                    {row["3d"]}
                  </td>

                  <td
                    className={`${cellBaseClasses} font-extrabold ${row.isLatest ? "text-red-500" : "text-black"
                      }`}
                  >
                    {row["2d_top"]}
                  </td>

                  <td
                    className={`${cellBaseClasses} font-extrabold ${row.isLatest ? "text-red-500" : "text-black"
                      }`}
                  >
                    {row["2d_bottom"]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
