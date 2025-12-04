"use client";

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen flex justify-center">
      <div className="bg-gray-100 min-h-screen lg:min-w-screen flex justify-center">
        <div className="max-w-6xl w-full p-3 bg-gray-100">
          <img
            src="https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764866245/huay-city-logo_qptmk2.png"
            alt="huay city logo"
            className="h-auto max-w-full object-contain mb-2 mx-auto block rounded-2xl"
            onError={(e) =>
            (e.currentTarget.src =
              "https://placehold.co/400x300/eeeeee/999999?text=No+Image")
            }
          />
          <img
            src="https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764867649/huay-city-telegram_wykj9b.jpg"
            alt="huay city telegram"
            className="h-auto max-w-full object-contain mb-4 mx-auto block rounded-2xl"
            onError={(e) =>
            (e.currentTarget.src =
              "https://placehold.co/400x300/eeeeee/999999?text=No+Image")
            }
          />
        </div>
      </div>
    </div>
  );
}
