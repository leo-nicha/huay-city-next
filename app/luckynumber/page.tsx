import LuckyNumberList from "@/components/LuckyNumberList";
import { getAllLuckyNumber } from "@/lib/getLuckyNumber";

export default function LuckyNumberPage() {
  const items = getAllLuckyNumber();

  return <LuckyNumberList items={items} />;
}