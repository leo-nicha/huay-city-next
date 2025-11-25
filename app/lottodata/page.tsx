import LottoDataList from "@/components/LottoDataList";
import { getAllLottoData } from "@/lib/getLottoData";

export default function LottoDataPage() {
  const items = getAllLottoData();

  return <LottoDataList items={items} />;
}