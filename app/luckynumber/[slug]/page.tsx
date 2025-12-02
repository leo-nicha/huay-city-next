"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Loader2 } from "lucide-react";

const API_URL = "https://lucky-number-api.vercel.app/api";

interface LuckyNumberItem {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  luckyImageUrl: string;
}

export default function LuckyNumberDetail() {
  const { slug } = useParams();
  const [content, setContent] = useState<LuckyNumberItem | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(API_URL);
        const json: LuckyNumberItem[] = await res.json();

        const found = json.find((item) => item.slug === slug);
        setContent(found ?? null);
      } catch (error) {
        console.error("Error fetching Lucky Number:", error);
        setContent(null);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader2 className="h-8 w-8 animate-spin text-red-600" />
      </div>
    );
  }

  if (!content) {
    return (
      <div className="p-4 text-center text-red-500 text-xl">
        ไม่พบข้อมูลสำหรับ slug: {slug}
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center">
      <div className="bg-gray-100 min-h-screen lg:min-w-screen flex justify-center">
        <div className="max-w-3xl w-full p-4 bg-gray-100">
          
          <img
            src={content.luckyImageUrl}
            alt={content.title}
            className="h-auto max-w-full object-contain mb-4 mx-auto block"
            onError={(e) =>
              (e.currentTarget.src =
                "https://placehold.co/400x300/eeeeee/999999?text=No+Image")
            }
          />
          <p className="text-black text-xl">{content.description}</p>

        </div>
      </div>
    </div>
  );
}
