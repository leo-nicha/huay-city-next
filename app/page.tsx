import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen justify-center mt-25">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-black">Welcome to HUAY CITY</h1>
        {/* <Link
          href="/luckynumber"
          className="text-lg font-medium text-blue-600"
        >
          Go to Lucky Number List
        </Link> */}
      </div>
    </div>
  );
}
