"use client";

import { useRouter } from "next/navigation";
import React from "react";
import ContentItem from "../components/cards/ContentItem";

const FortuneList: React.FC = () => {
    const items = [
        { title: 'เลขกำลังวัน', subtitle: 'หวยงวดนี้ออกในวันจันทร์ ที่ 1 ธันวาคม 2568',slug: 'dailypowernumber', imageUrl: 'https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763562227/lottoanalyze_xgf22b.jpg' },
    ];

    const router = useRouter();

    const handleItemClick = (title: string) => {
        if (title === 'เลขกำลังวัน') {
            router.push(`/lottoanalyze/dailypowernumber`)
        }
    };

    return (
        <div className=" w-full p-2 grid grid-cols-1 lg:grid-cols-3 lg:gap-4 justify-items-center mx-auto max-w-6xl mt-25">
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
};

export default FortuneList;
