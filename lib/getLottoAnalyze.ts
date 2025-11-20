import data from "../data/lottoanalyze.json";

export function getAllLottoAnalyze() {
  return data;
}

export function getLottoAnalyzeBySlug(slug: string) {
  return data.find((item) => item.slug === slug) || null;
}