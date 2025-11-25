"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getLottoEnvelopeBySlug } from "@/lib/getLottoEnvelopeList";

interface LottoEnvelopeItem {
  title: string;
  subtitle: string;
  description: string;
  luckyImageUrl: string;
}

export default function LottoEnvelopeDetail() {
  const { slug } = useParams();
  const [content, setContent] = useState<LottoEnvelopeItem | null>(null);

  useEffect(() => {
    const item = getLottoEnvelopeBySlug(slug as string);
    setContent(item);
  }, [slug]);

  if (!content)
    return (
      <div className="p-4 text-center text-red-500">
        Page not found for slug: {slug}
      </div>
    );

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
          <div>
            <p className="text-black text-2xl">{content.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}