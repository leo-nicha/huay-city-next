import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-black dark:text-white">Welcome to HUAY CITY</h1>
        <Link
          href="/luckynumber"
          className="text-lg font-medium text-blue-600 dark:text-blue-400"
        >
          Go to Lucky Number List
        </Link>
      </div>
    </div>
  );
}
