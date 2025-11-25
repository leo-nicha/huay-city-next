import HanoiLottoList from "@/components/HanoiLottoList";
import { getAllHanoiLotto } from "@/lib/getHanoiLotto";

export default function HanoiLottoPage() {
  const items = getAllHanoiLotto();

  return <HanoiLottoList items={items} />;
}