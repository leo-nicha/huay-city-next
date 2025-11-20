"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ContentItem from "../components/cards/ContentItem";

interface LuckyNumberItem {
  title: string;
  slug: string;
  subtitle: string;
  imageUrl: string;
}

export default function LuckyNumberList() {
  const router = useRouter();
  const [items, setItems] = useState<LuckyNumberItem[]>([]);

  useEffect(() => {
    import("../../data/luckynumber.json")
      .then((module) => setItems(module.default))
      .catch((err) => console.error("Failed to load JSON:", err));
  }, []);

  const handleItemClick = (slug: string) => {
    router.push(`/luckynumber/${slug}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pl-2 pr-2 pt-4 mx-auto max-w-6xl  bg-gray-100">
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
}
