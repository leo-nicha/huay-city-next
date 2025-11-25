import LaosLottoList from "@/components/LaosLottoList";
import { getAllLaosLotto } from "@/lib/getLaosLotto";

export default function LaosLottoPage() {
  const items = getAllLaosLotto();

  return <LaosLottoList items={items} />;
}