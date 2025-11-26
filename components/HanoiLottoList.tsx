"use client";

import ContentItem from "@/app/components/cards/ContentItem";
import { useRouter } from "next/navigation";

const items = [
  {
    title: "ฮานอยพิเศษ",
    slug: "special",
    subtitle: "พฤศจิกายน 2568",
    imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764181967/hanoilottoresultspecial_kthrgq.jpg",
  },
  {
    title: "ฮานอยปกติ",
    slug: "normal",
    subtitle: "พฤศจิกายน 2568",
    imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764181966/hanoilottoresultnormal_zpoaik.jpg",
  },
  {
    title: "ฮานอย VIP",
    slug: "vip",
    subtitle: "พฤศจิกายน 2568",
    imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764181967/hanoilottoresultvip_dpjkuj.jpg",
  },
];

export default function HanoiLottoList() {
  const router = useRouter();

  const handleClick = (slug: string) => {
    router.push(`/hanoilotto/${slug}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen lg:flex lg:justify-center">
      <div className="bg-gray-100 min-h-screen lg:min-w-screen ">
        <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pl-2 pr-2 pt-4 mx-auto max-w-6xl ">
          {items.map((item) => (
            <ContentItem
              key={item.slug}
              title={item.title}
              subtitle={item.subtitle}
              imageUrl={item.imageUrl}
              onClick={() => handleClick(item.slug)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
