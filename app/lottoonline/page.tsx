"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface VipItem {
  vip: {
    title: string;
    online_lotto: {
      title: string;
      smImageUrl: string;
      mdImageUrl: string;
      lgImageUrl: string;
      linkUrl?: string;
    };
  };
}

interface NormalItem {
  normal: {
    title: string;
    online_lotto: {
      smImageUrl: string;
      linkUrl?: string;
    };
  };
}

export default function CalendarList() {
  const [vipData, setVipData] = useState<VipItem[]>([]);
  const [normalData, setNormalData] = useState<NormalItem[]>([]);

  // Fetch VIP
  useEffect(() => {
    fetch("https://online-lotto-api.vercel.app/onlinelottovip.json")
      .then((res) => res.json())
      .then((data) => setVipData(data))
      .catch((err) => console.error(err));
  }, []);

  // Fetch Normal
  useEffect(() => {
    fetch("https://online-lotto-api.vercel.app/onlinelottonormal.json")
      .then((res) => res.json())
      .then((data) => setNormalData(data))
      .catch((err) => console.error(err));
  }, []);

  // ฟังก์ชันเปิดลิงก์
  const openLink = (url?: string) => {
    if (!url) return;
    window.open(url, "_blank");
  };

  return (
<div className="bg-gray-100 min-h-screen lg:flex lg:justify-center">
      <div className="bg-gray-100 min-h-screen lg:min-w-screen ">
        <div className=" gap-2 pl-2 pr-2 pt-4 mx-auto max-w-3xl bg-gray-100 ">

        {/* ส่วนบน (VIP) */}
        <div className="mb-3">
          {vipData.length > 0 && (
            <div className="space-y-4">
              {vipData.map((item, index) => (
                <div
                  key={index}
                  className="relative w-full cursor-pointer"
                  onClick={() => openLink(item.vip.online_lotto.linkUrl)}
                >
                  {/* Desktop */}
                  <div className="hidden lg:block">
                    <Image
                      src={item.vip.online_lotto.lgImageUrl}
                      width={1500}
                      height={400}
                      alt={item.vip.online_lotto.title}
                      className="w-full rounded-xl"
                    />
                  </div>

                  {/* Tablet */}
                  <div className="hidden sm:block lg:hidden">
                    <Image
                      src={item.vip.online_lotto.mdImageUrl}
                      width={1200}
                      height={300}
                      alt={item.vip.online_lotto.title}
                      className="w-full rounded-xl"
                    />
                  </div>

                  {/* Mobile */}
                  <div className="block sm:hidden">
                    <Image
                      src={item.vip.online_lotto.mdImageUrl}
                      width={600}
                      height={200}
                      alt={item.vip.online_lotto.title}
                      className="w-full rounded-xl"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ส่วนล่าง (Normal) */}
        <div className="grid gap-3 grid-cols-3 sm:grid-cols-4 lg:grid-cols-6">
          {normalData.slice(0, 9).map((item, index) => (
            <div
              key={index}
              className="w-full cursor-pointer"
              onClick={() => openLink(item.normal.online_lotto.linkUrl)}
            >
              <Image
                src={item.normal.online_lotto.smImageUrl}
                width={300}
                height={300}
                alt={item.normal.title}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}
