"use client";

import { useRouter } from "next/navigation";
import React from "react";
import ContentItem from "../components/cards/ContentItem";

const LaosLottoList: React.FC = () => {
  const router = useRouter();

  const items = [
    { title: "หวยลาว 28-11-68", subtitle: "พฤศจิกายน 2568", slug: "28-11-2025", folder: "lottoresult", date: "28-11-2025", imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764149027/laoslottoresult_yyws7l.jpg", },
    { title: "หวยลาว 26-11-68", subtitle: "พฤศจิกายน 2568", slug: "26-11-2025", folder: "lottoresult", date: "26-11-2025", imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764149027/laoslottoresult_yyws7l.jpg", },
    { title: "หวยลาว 24-11-68", subtitle: "พฤศจิกายน 2568", slug: "24-11-2025", folder: "lottoresult", date: "24-11-2025", imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764149027/laoslottoresult_yyws7l.jpg", },
    { title: "หวยลาว 21-11-68", subtitle: "พฤศจิกายน 2568", slug: "21-11-2025", folder: "lottoresult", date: "21-11-2025", imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764149027/laoslottoresult_yyws7l.jpg", },
    { title: "หวยลาว 19-11-68", subtitle: "พฤศจิกายน 2568", slug: "19-11-2025", folder: "lottoresult", date: "19-11-2025", imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764149027/laoslottoresult_yyws7l.jpg", },
    { title: "หวยลาว 17-11-68", subtitle: "พฤศจิกายน 2568", slug: "17-11-2025", folder: "lottoresult", date: "17-11-2025", imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764149027/laoslottoresult_yyws7l.jpg", },
    { title: "หวยลาว 14-11-68", subtitle: "พฤศจิกายน 2568", slug: "14-11-2025", folder: "lottoresult", date: "14-11-2025", imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764149027/laoslottoresult_yyws7l.jpg", },
    { title: "หวยลาว 12-11-68", subtitle: "พฤศจิกายน 2568", slug: "12-11-2025", folder: "lottoresult", date: "12-11-2025", imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764149027/laoslottoresult_yyws7l.jpg", },
    { title: "หวยลาว 10-11-68", subtitle: "พฤศจิกายน 2568", slug: "10-11-2025", folder: "lottoresult", date: "10-11-2025", imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764149027/laoslottoresult_yyws7l.jpg", },
    { title: "หวยลาว 07-11-68", subtitle: "พฤศจิกายน 2568", slug: "07-11-2025", folder: "lottoresult", date: "07-11-2025", imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764149027/laoslottoresult_yyws7l.jpg", },
    { title: "หวยลาว 05-11-68", subtitle: "พฤศจิกายน 2568", slug: "05-11-2025", folder: "lottoresult", date: "05-11-2025", imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764149027/laoslottoresult_yyws7l.jpg", },
    { title: "หวยลาว 03-11-68", subtitle: "พฤศจิกายน 2568", slug: "03-11-2025", folder: "lottoresult", date: "03-11-2025", imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764149027/laoslottoresult_yyws7l.jpg", },
    
    // เพิ่มงวดอื่นๆ ตามต้องการ
  ];

  const handleItemClick = (folder: string, slug: string) => {
    router.push(`/laoslotto/${folder}/${slug}`);
  };

  return (
    <div className="bg-gray-100 min-h-screen lg:flex lg:justify-center">
      <div className="bg-gray-100 min-h-screen lg:min-w-screen">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 pl-2 pr-2 pt-4 mx-auto max-w-6xl">
          {items.map((item) => (
            <ContentItem
              key={item.slug}
              title={item.title}
              subtitle={item.subtitle}
              imageUrl={item.imageUrl}
              onClick={() => handleItemClick(item.folder, item.slug)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LaosLottoList;
