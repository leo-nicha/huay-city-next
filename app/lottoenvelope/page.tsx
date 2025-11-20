import LottoEnvelopeList from "@/components/LottoEnvelopeList";
import { getAllLottoEnvelope } from "@/lib/getLottoEnvelopeList";

export default function LottoEnvelopePage() {
  const items = getAllLottoEnvelope();

  return <LottoEnvelopeList items={items} />;
}