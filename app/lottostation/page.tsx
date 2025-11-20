import LottoStationList from "@/components/LottoStationList";
import { getAllLottoStation } from "@/lib/getLottoStation";

export default function LottoStationPage() {
  const items = getAllLottoStation();

  return <LottoStationList items={items} />;
}