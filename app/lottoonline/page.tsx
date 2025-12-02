"use client";

import { useRouter } from "next/navigation";
import React from "react";
import ContentItem from "../components/cards/ContentItem";

const CalanderList: React.FC = () => {
  const items = [
    { title: 'เร็วๆ นี้', subtitle: 'เร็วๆ นี้', imageUrl: 'https://res.cloudinary.com/dvv3wvgnt/image/upload/v1763563164/lottowinner_xve4xu.jpg' },
  ];

  const router = useRouter();

  const handleItemClick = (title: string) => {
    if (title === 'เร็วๆ นี้') {
      router.push('');
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen lg:flex lg:justify-center">
      <div className="bg-gray-100 min-h-screen lg:min-w-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pl-2 pr-2 pt-4 mx-auto max-w-6xl">
          {/* {items.map((item) => (
            <ContentItem
              key={item.title}
              title={item.title}
              subtitle={item.subtitle}
              imageUrl={item.imageUrl}
              onClick={() => handleItemClick(item.title)}
            />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default CalanderList;
