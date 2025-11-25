"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getLottoNewsBySlug } from "@/lib/getLottoNews";

interface LottoNewsItem {
  news: number;
  header: string;
  content: string[];
  slug: string;
}

export default function LottoNewsDetail() {
  const { slug } = useParams();
  const [item, setItem] = useState<LottoNewsItem | null>(null);

  useEffect(() => {
    const data = getLottoNewsBySlug(slug as string);
    setItem(data);
  }, [slug]);

  if (!item)
    return (
      <div className="p-4 text-center text-red-500">
        Page not found for slug: {slug}
      </div>
    );

  return (
    <div className="w-full max-w-6xl bg-linear-to-b from-amber-50 to-white flex flex-col items-center p-4 font-sans mx-auto min-h-screen">
      <div className="text-center mb-6 w-full">
        <h1 className="text-xl md:text-3xl font-extrabold text-red-700 font-serif mb-4 max-w-6xl pl-25 pr-25">{item.header}</h1>
          <div className="space-y-2 text-gray-800">
            {item.content.map((line, index) => (
              <div
                key={index}
                dangerouslySetInnerHTML={{ __html: line }}
              />
            ))}
          </div>
        </div>
      </div>

  );
}
