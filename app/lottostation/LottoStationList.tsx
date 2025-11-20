"use client";

import { useRouter } from "next/navigation";
import React from "react";
import ContentItem from "../components/cards/ContentItem";

const FortuneList: React.FC = () => {
    const items = [
        { title: 'แม่นมาก ขั้นเทพ', subtitle: 'งวดวันที่ 1 ธันวาคม 68',slug: 'mannmakkhanthep', imageUrl: 'https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763553104/mannmakkhanthep_kcrhhu.jpg' },
    ];

    const router = useRouter();

    const handleItemClick = (title: string) => {
        if (title === 'แม่นมาก ขั้นเทพ') {
            router.push(`/lottostation/mannmakkhanthep`)
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
