"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface LuckyNumberItem {
  title: string;
  subtitle: string;
  description: string;
  luckyImageUrl: string;
}

export default function LuckyNumberDetail() {
  const { slug } = useParams(); // รับ slug จาก dynamic route
  const router = useRouter();
  const [content, setContent] = useState<LuckyNumberItem | null>(null);

  useEffect(() => {
    import("../../../data/luckynumber.json")
      .then((module) => {
        const item = module.default.find((i: any) => i.slug === slug);
        if (item) {
          setContent({
            title: item.title,
            subtitle: item.subtitle,
            description: item.description,
            luckyImageUrl: item.luckyImageUrl,
          });
        } else {
          setContent(null);
        }
      })
      .catch((err) => console.error("Failed to load JSON:", err));
  }, [slug]);

  if (!content)
    return (
      <div className="p-4 text-center text-red-500">
        Page not found for slug: {slug}
      </div>
    );

  return (
    <div className="max-w-3xl mx-auto p-4 items-center  bg-gray-100">

      <img
        src={content.luckyImageUrl}
        alt={content.title}
        className="h-auto max-w-full object-contain mb-4 mx-auto block"
        onError={(e) =>
        (e.currentTarget.src =
          "https://placehold.co/400x300/eeeeee/999999?text=No+Image")
        }
      />
      <div>
        <p className="text-gray-800 dark:text-gray-200">{content.description}</p>
      </div>
    </div>
  );
}
