"use client";

import { useRouter } from "next/navigation";
import React from "react";
import ContentItem from "../components/cards/ContentItem";

const LottoDataList: React.FC = () => {
    const items = [
        { title: 'สถิติรางวัล', subtitle: 'เดือนธันวาคม 2554-2568', slug: 'lottodatadec', imageUrl: 'https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763453771/lottodatadec_siwavb.jpg' },
    ];

    const router = useRouter();

    const handleItemClick = (title: string) => {
        if (title === 'สถิติรางวัล') {
            router.push('/lottodata/lottodatadec');
        }

    };

    return (
        <div className=" w-full p-2 grid grid-cols-1 lg:grid-cols-3 lg:gap-4 justify-items-center mx-auto max-w-6xl mt-25 lg:mt-25">
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

export default LottoDataList;
