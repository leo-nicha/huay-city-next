import YeekeeLottoList from "@/components/YeekeeLottoList";
import { getAllYeekeeLotto } from "@/lib/getYeekeeLotto";

export default function YeekeeLottoPage() {
  const items = getAllYeekeeLotto();

  return <YeekeeLottoList items={items} />;
}