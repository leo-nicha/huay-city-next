"use client";

import { useRouter } from "next/navigation";
import React from "react";
import ContentItem from "../components/cards/ContentItem";

const FortuneList: React.FC = () => {
    const items = [
        { title: 'อาม่าให้ลาภ', subtitle: 'งวดวันที่ 1 ธันวาคม 68', slug: 'amahailap', imageUrl: 'https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763554079/amahailap_r5eiew.jpg' },
    ];

    const router = useRouter();

    const handleItemClick = (title: string) => {
        if (title === 'อาม่าให้ลาภ') {
            router.push(`/lottoenvelope/amahailap`)
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
