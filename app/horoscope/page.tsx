"use client";

import { useRouter } from "next/navigation";
import React from "react";
import ContentItem from "../components/cards/ContentItem";

const HoroscopeList: React.FC = () => {
  const items = [
    { title: "ดวงรายวัน", subtitle: "ไพ่ที่คุณเลือก จะบอกความจริงให้กับคุณ", slug: 'tarotdaily', imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763986559/dailytarot_exra5k.jpg" },
    { title: "ความรัก", subtitle: "คนโสด คนมีคู่ มีคนคุย อกหัก", slug: 'tarotlove', imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763986560/lovetarot_amdrks.jpg" },
    { title: "การงาน", subtitle: "เรื่องดีๆ ปัญหา อุปสรรค โอกาส ทางแก้", slug: 'tarotwork', imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763986556/worktarot_tffntk.jpg" },
    { title: "การเรียน", subtitle: "การเตรียมตัว การสอบ การปรับปรุง พัฒนา", slug: 'tarotstudy', imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763986565/studytarot_yltuld.jpg" },
    { title: "การเงิน", subtitle: "โชคลาภ รายได้ หนี้สิน สภาพคล่อง", slug: 'tarotmoney', imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763986564/moneytarot_hnwjcp.jpg" },
    { title: "สุขภาพ", subtitle: "สุขภาพกาย สุขภาพใจ สุขภาพจิต", slug: 'tarothealth', imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763986564/healthtarot_bcwdn8.jpg" },
    { title: "วันเกิด", subtitle: "วิเคราะห์นิสัยพื้นฐานและโชคชะตา", slug: 'luckyday', imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763656155/luckydays_g6zmfl.jpg" },
    { title: "ราศี", subtitle: "ตำแหน่งดาววันเกิด เช่น ราศีเมษ ราศีพฤษภ ฯลฯ", slug: 'luckywestzodiac', imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763656154/luckywestzodiac_lfzkby.jpg" },
    { title: "ปีนักษัตร", subtitle: "ปีเกิดตามจันทรคติจีน เช่น ชวด ฉลู ขาล ฯลฯ", slug: 'luckycnzodiac', imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763656155/luckycnzodiac_lbijok.jpg" },
    { title: "สัตว์ในฝัน", subtitle: "ตีเลข / ทำนายโชคลาภ / เหตุการณ์ล่วงหน้า", slug: 'dreamanimal', imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763656154/dreamanimal_solo9b.jpg" },
    { title: "เซียมซี", subtitle: "เสี่ยงเซียมซีรายสัปดาห์ บอกเรื่องราวในอนาคต", slug: 'fortunesticks', imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763751186/fortunesticks_uvbmmk.jpg" },
    { title: "อักษรรูน", subtitle: "ศาสตร์โบราณทำนาย อดีต ปัจจุบัน อนาคต", slug: 'runestone', imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763656154/runestone_cwsw4b.jpg" },
    { title: "เบอร์มงคล", subtitle: "หลักเลขศาสตร์ ดวงดาว และโหราศาสตร์ ", slug: 'numberphone', imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763656154/phonenumber_cuhqns.jpg" },
    { title: "บ้านเลขที่", subtitle: "ห้องมงคล บ้านมงคล ตามหลักโหราศาสตร์ไทย", slug: 'numberhouse', imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763656154/housenumber_rdmxxg.jpg" },
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
