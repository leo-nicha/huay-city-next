import "./globals.css";
import Header from "./components/layout/Header";
import SideNav from "./components/layout/SideNav";

export const metadata = {
  title: "HUAY CITY",
  description: "เลขเด็ด หวยดัง อัปเดตทุกงวด",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className="bg-gray-100 min-h-screen">
        <Header />

        {/* เปลี่ยน flex-direction ตามขนาดหน้าจอ */}
        <div className="flex flex-col lg:flex-col min-h-screen">
          {/* SideNav จะอยู่ด้านบนของ main */}
          <SideNav />

          <main className="flex-1 overflow-y-auto pl-24 lg:p-8 flex flex-col mt-12 lg:mt-25">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
