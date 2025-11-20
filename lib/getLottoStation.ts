import data from "../data/lottostation.json";

export function getAllLottoStation() {
  return data;
}

export function getLottoStationBySlug(slug: string) {
  return data.find((item) => item.slug === slug) || null;
}