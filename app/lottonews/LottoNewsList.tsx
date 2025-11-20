"use client";

import { useRouter } from "next/navigation";
import React from "react";
import ContentItem from "../components/cards/ContentItem";

const FortuneList: React.FC = () => {
    const items = [
        { title: 'เศรษฐีใหม่', subtitle: '"สลากดิจิทัล" งวด 16/11/68 รวม 162 ล้านบาท',slug: 'news0001', imageUrl: 'https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763563164/lottowinner_xve4xu.jpg' },
    ];

    const router = useRouter();
    
        const handleItemClick = (title: string) => {
        if (title === 'เศรษฐีใหม่') {
            router.push(`/lottonews/news0001`)
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
