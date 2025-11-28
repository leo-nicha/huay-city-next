"use client";

import { useRouter } from "next/navigation";
import React from "react";
import ContentItem from "../components/cards/ContentItem";

const HoroscopeList: React.FC = () => {
  const items = [
    {
      title: "สลาก ธ.ก.ส.",
      subtitle: "16 พฤศจิกายน 2568",
      slug: "torkorsor",
      date: "2025-11-16",
      imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764224877/torkorsorlotto_pd3usp.jpg"
    },
    {
      title: "สลากออมสิน",
      subtitle: "16 พฤศจิกายน 2568",
      slug: "aomsin",
      date: "2025-11-16",
      imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764224877/aomsinlotto_yauwqt.jpg"
    },
    // เพิ่มรายการอื่นได้ตรงนี้
  ];

  const router = useRouter();

const handleItemClick = (slug: string, date: string) => {
  router.push(`/otherlotto/${slug}?date=${date}`);
};

  return (
    <div className="bg-gray-100 min-h-screen lg:flex lg:justify-center">
      <div className="bg-gray-100 min-h-screen lg:min-w-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pl-2 pr-2 pt-4 mx-auto max-w-6xl">
          {items.map((item) => (
            <ContentItem
              key={item.slug}
              title={item.title}
              subtitle={item.subtitle}
              imageUrl={item.imageUrl}
              onClick={() => handleItemClick(item.slug, item.date)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoroscopeList;
