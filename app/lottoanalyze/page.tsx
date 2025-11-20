import LottoAnalyzeList from "@/components/LottoAnalyzeList";
import { getAllLottoAnalyze } from "@/lib/getLottoAnalyze";

export default function LottoAnalyzePage() {
  const items = getAllLottoAnalyze();

  return <LottoAnalyzeList items={items} />;
}