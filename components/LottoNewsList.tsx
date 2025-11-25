"use client";

import { useRouter } from "next/navigation";
import ContentItem from "@/app/components/cards/ContentItem";

interface LottoNewsItem {
  news: number;
  header: string;
  slug: string;
  imageUrl: string;
  title: string;
  subtitle: string;
  content: string[];
}

export default function LottoNewsList({ items }: { items: LottoNewsItem[] }) {
  const router = useRouter();

  const handleItemClick = (slug: string) => {
    router.push(`/lottonews/${slug}`);
  };

  return (
<div className="bg-gray-100 min-h-screen lg:flex lg:justify-center">
      <div className="bg-gray-100 min-h-screen lg:min-w-screen ">
        <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pl-2 pr-2 pt-4 mx-auto max-w-6xl ">
          {items.map((item) => (
            <ContentItem
              key={item.slug}
              title={item.title}
              subtitle={
                item.subtitle}
              imageUrl={item.imageUrl}
              onClick={() => handleItemClick(item.slug)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
