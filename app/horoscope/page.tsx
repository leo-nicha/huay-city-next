"use client";

import { useRouter } from "next/navigation";
import React from "react";
import ContentItem from "../components/cards/ContentItem";

const HoroscopeList: React.FC = () => {
  const items = [
    { title: "วันเกิด", subtitle: "วิเคราะห์นิสัยพื้นฐานและโชคชะตา", slug: 'luckyday', imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763656155/luckydays_g6zmfl.jpg" },
    { title: "ราศี", subtitle: "ตำแหน่งดาววันเกิด เช่น ราศีเมษ ราศีพฤษภ ฯลฯ", slug: 'luckywestzodiac', imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763656154/luckywestzodiac_lfzkby.jpg" },
    { title: "ปีนักษัตร", subtitle: "ปีเกิดตามจันทรคติจีน เช่น ชวด ฉลู ขาล ฯลฯ", slug: 'luckycnzodiac', imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763656155/luckycnzodiac_lbijok.jpg" },
    { title: "สัตว์ในฝัน", subtitle: "ตีเลข / ทำนายโชคลาภ / เหตุการณ์ล่วงหน้า", slug: 'dreamanimal', imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763656154/dreamanimal_solo9b.jpg" },
  ];

  const router = useRouter();

  const handleItemClick = (slug: string) => {
    router.push(`/horoscope/${slug}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen lg:flex lg:justify-center">
      <div className="bg-gray-100 min-h-screen lg:min-w-screen ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pl-2 pr-2 pt-4 mx-auto max-w-6xl bg-gray-100 ">
          {items.map((item) => (
            <ContentItem
              key={item.slug}
              title={item.title}
              subtitle={item.subtitle}
              imageUrl={item.imageUrl}
              onClick={() => handleItemClick(item.slug)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HoroscopeList;
