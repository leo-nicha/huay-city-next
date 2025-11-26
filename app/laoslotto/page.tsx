import LaosLottoList from "@/components/LaosLottoList";
import { getAllLaosLotto } from "@/lib/getLaosLotto";

export default function LaosLottoPage() {
  const draws = getAllLaosLotto();

  const items = draws.map((d) => ({
    title: `ผลหวยลาว ${d.date}`,
    slug: d.date,
    subtitle: d.subtitle || "",
    imageUrl: "https://res.cloudinary.com/dvv3wvgnt/image/upload/v1764149027/laoslottoresult_yyws7l.jpg",
    description: "",
    luckyImageUrl: ""
  }));

  return <LaosLottoList items={items} />;
}
