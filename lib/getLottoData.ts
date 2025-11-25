import data from "../data/lottodata.json";

export function getAllLottoData() {
  return data;
}

export function getLottoDataBySlug(slug: string) {
  return data.find((item) => item.slug === slug) || null;
}
