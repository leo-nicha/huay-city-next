"use client";

import React from 'react';

type ContentItemProps = {
  title: string;
  subtitle: string;
  imageUrl: string;
  onClick?: () => void;
};

const ContentItem: React.FC<ContentItemProps> = ({ title, subtitle, imageUrl, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-white p-4 h-28 flex items-center justify-start mb-2 rounded-lg shadow-sm w-full text-left active:scale-[0.98] transition-transform"
    >
      {/* LEFT TEXT */}
      <div className="flex-1 min-w-0 pr-3">
        <h3 className="text-xl font-bold text-gray-900 wrap-break-word line-clamp-none whitespace-normal">
          {title}
        </h3>

        <p className="text-sm text-gray-500 mt-1 wrap-break-word line-clamp-none whitespace-normal">
          {subtitle}
        </p>
      </div>

      {/* RIGHT IMAGE */}
      <div className="shrink-0">
        <img
          src={imageUrl}
          alt={title}
          className="h-24 w-auto object-contain max-h-full"
          onError={(e) =>
            (e.currentTarget.src =
              'https://placehold.co/140x110/eeeeee/999999?text=Error')
          }
        />
      </div>
    </button>
  );
};

export default ContentItem;
