import LottoNewsList from "@/components/LottoNewsList";
import { getAllLottoNews } from "@/lib/getLottoNews";

export default function LottoNewsPage() {
  const items = getAllLottoNews();

  return <LottoNewsList items={items} />;
}