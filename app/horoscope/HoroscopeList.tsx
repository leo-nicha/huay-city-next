"use client";

import { useRouter } from "next/navigation";
import React from "react";
import ContentItem from "../components/cards/ContentItem";

const HoroscopeList: React.FC = () => {
  const items = [
    { title: "วันเกิด", subtitle: "วิเคราะห์นิสัยพื้นฐานและโชคชะตา", slug: 'luckyday', imageUrl: "/luckydays.jpg" },
    { title: "ราศี", subtitle: "ตำแหน่งดาววันเกิด เช่น ราศีเมษ ราศีพฤษภ ฯลฯ", slug: 'luckywestzodiac', imageUrl: "/luckywestzodiac.jpg" },
    { title: "ปีนักษัตร", subtitle: "ปีเกิดตามจันทรคติจีน เช่น ชวด ฉลู ขาล ฯลฯ", slug: 'luckycnzodiac', imageUrl: "/luckycnzodiac.jpg" },
    { title: "สัตว์ในฝัน", subtitle: "ตีเลข / ทำนายโชคลาภ / เหตุการณ์ล่วงหน้า", slug: 'dreamanimal', imageUrl: "/dreamanimal.jpg" },
  ];

  const router = useRouter();

  const handleItemClick = (title: string) => {
    if (title === "วันเกิด") {
      router.push("/horoscope/luckyday");
    }
    if (title === "ราศี") {
      router.push("/horoscope/luckywestzodiac");
    }
    if (title === "ปีนักษัตร") {
      router.push("/horoscope/luckycnzodiac");
    }
    if (title === "สัตว์ในฝัน") {
      router.push("/horoscope/dreamanimal");
    }
  };

  return (
    <div className="w-full p-2 grid grid-cols-1 lg:grid-cols-3 lg:gap-4 justify-items-center mx-auto max-w-6xl mt-25">
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
  );
};

export default HoroscopeList;
