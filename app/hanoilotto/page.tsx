"use client";

import { useRouter } from "next/navigation";
import React from "react";
import ContentItem from "../components/cards/ContentItem";

const HanoiLottoPage: React.FC = () => {
  const router = useRouter();

  const items = [
    { title: "ฮานอยพิเศษ", subtitle: "ธันวาคม 2568", slug: "special", folder: "lottoresult1225", file: "hanoilotto1225", imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764181967/hanoilottoresultspecial_kthrgq.jpg", },
    { title: "ฮานอยปกติ", subtitle: "ธันวาคม 2568", slug: "normal", folder: "lottoresult1225", file: "hanoilotto1225", imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764181966/hanoilottoresultnormal_zpoaik.jpg", },
    { title: "ฮานอย VIP", subtitle: "ธันวาคม 2568", slug: "vip", folder: "lottoresult1225", file: "hanoilotto1225", imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764181967/hanoilottoresultvip_dpjkuj.jpg", },
    { title: "ฮานอยพิเศษ", subtitle: "พฤศจิกายน 2568", slug: "special", folder: "lottoresult1125", file: "hanoilotto1125", imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764181967/hanoilottoresultspecial_kthrgq.jpg", },
    { title: "ฮานอยปกติ", subtitle: "พฤศจิกายน 2568", slug: "normal", folder: "lottoresult1125", file: "hanoilotto1125", imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764181966/hanoilottoresultnormal_zpoaik.jpg", },
    { title: "ฮานอย VIP", subtitle: "พฤศจิกายน 2568", slug: "vip", folder: "lottoresult1125", file: "hanoilotto1125", imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764181967/hanoilottoresultvip_dpjkuj.jpg", },
  ];

  const handleItemClick = (folder: string, slug: string) => {
    router.push(`/hanoilotto/${folder}/${slug}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen lg:flex lg:justify-center">
      <div className="bg-gray-100 min-h-screen lg:min-w-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pl-2 pr-2 pt-4 mx-auto max-w-6xl">
          {items.map((item, index) => (
            <ContentItem
              key={index}
              title={item.title}
              subtitle={item.subtitle}
              imageUrl={item.imageUrl}
              onClick={() => handleItemClick(item.folder, item.slug)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HanoiLottoPage;
