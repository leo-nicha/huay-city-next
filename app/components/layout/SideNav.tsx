"use client";

import { useRouter, usePathname } from "next/navigation";
import SideNavItem from "./SideNavItem";
import {
  Clover, Star, ScanSearch, Mail, House, ListOrdered,
  Globe, Tv, ChartNoAxesCombined
} from "lucide-react";

const tabs = [
  { id: "luckynumber", icon: <Star />, label: "เลขเด็ด" },
  { id: "lottochecker", icon: <ScanSearch />, label: "ตรวจหวย" },
  { id: "laoslotto", icon: <Mail />, label: "หวยลาว" },
  { id: "hanoilotto", icon: <ChartNoAxesCombined />, label: "ฮานอย" },
  { id: "yeekeelotto", icon: <ListOrdered />, label: "หวยยี่กี" },
  { id: "horoscope", icon: <Clover />, label: "ดูดวง" },
  { id: "lottoonline", icon: <Globe />, label: "เร็วๆ นี้" }
];

export default function SideNav() {
  const router = useRouter();
  const pathname = usePathname();

  // active tab จาก URL เช่น /luckynumber → "luckynumber"
  const activeTab = pathname.split("/")[1] || "luckynumber";

  const changeTab = (tab: string) => {
    router.push(`/${tab}`);
  };

  return (
    <div className="bg-gray-50 mb-11">
      {/* Desktop */}
      <header className="hidden lg:block w-full bg-gray-100 border-b shadow-md top-0 z-20 mt-24 fixed ">
        <div className="max-w-7xl mx-auto flex items-center space-x-6 p-4 ">
          {tabs.map((t) => (
            <SideNavItem
              key={t.id}
              icon={t.icon}
              label={t.label}
              active={activeTab === t.id}
              onClick={() => changeTab(t.id)}
            />
          ))}
        </div>
      </header>

      {/* Mobile */}
      <nav className="fixed left-0 top-20 h-[calc(100vh-64px)] w-24 bg-gray-100 shrink-0 p-2 border-r lg:hidden mt-4 overflow-y-auto pb-10">
        <div className="flex flex-col items-center space-y-1">
          {tabs.map((t) => (
            <SideNavItem
              key={t.id}
              icon={t.icon}
              label={t.label}
              active={activeTab === t.id}
              onClick={() => changeTab(t.id)}
            />
          ))}
        </div>
      </nav>
    </div>
  );
}
