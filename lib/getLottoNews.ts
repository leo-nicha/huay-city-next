import data from "../data/lottonews.json";

export function getAllLottoNews() {
  return data;
}

export function getLottoNewsBySlug(slug: string) {
  return data.find((item) => item.slug === slug) || null;
}
