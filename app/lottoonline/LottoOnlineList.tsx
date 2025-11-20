"use client";

import { useRouter } from "next/navigation";
import React from "react";
import ContentItem from "../components/cards/ContentItem";

const CalanderList: React.FC = () => {
  const items = [
    { title: 'เร็วๆ นี้', subtitle: '', imageUrl: '' },
  ];

  const router = useRouter();

  const handleItemClick = (title: string) => {
    if (title === 'เร็วๆ นี้') {
      router.push('');
    }
  };

  return (
    <div className=" w-full p-2 grid grid-cols-1 lg:grid-cols-3 lg:gap-4 justify-items-center mx-auto max-w-6xl mt-25">
      {items.map((item) => (
        <ContentItem
          key={item.title}
          title={item.title}
          subtitle={item.subtitle}
          imageUrl={item.imageUrl}
          onClick={() => handleItemClick(item.title)}
        />
      ))}
    </div>
  );
};

export default CalanderList;
