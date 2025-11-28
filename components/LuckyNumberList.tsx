"use client";

import ContentItem from "@/app/components/cards/ContentItem";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface LuckyNumberItem {
  title: string;
  slug: string;
  subtitle: string;
  imageUrl: string;
  description: string;
  luckyImageUrl: string;
}

export default function LuckyNumberList({ items }: { items: LuckyNumberItem[] }) {
  const router = useRouter();
  const [visibleCount, setVisibleCount] = useState(15);

  const handleItemClick = (slug: string) => router.push(`/luckynumber/${slug}`);

  const loadMore = () => setVisibleCount((prev) => prev + 9);

  return (
    <div className="bg-gray-100 min-h-screen lg:flex lg:justify-center">
      <div className="bg-gray-100 min-h-screen lg:min-w-screen">
        <div className="bg-gray-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pl-2 pr-2 pt-4 mx-auto max-w-6xl">

          {items.slice(0, visibleCount).map((item) => (
            <ContentItem
              key={item.slug}
              title={item.title}
              subtitle={item.subtitle}
              imageUrl={item.imageUrl}
              onClick={() => handleItemClick(item.slug)}
            />
          ))}

        </div>

        {/* Load More */}
        {visibleCount < items.length && (
          <div className="flex justify-center py-6">
            <button
              className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              onClick={loadMore}
            >
              ดูเลขเด็ดเพิ่มเติม
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
