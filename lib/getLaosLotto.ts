import data from "../data/laoslotto.json";

export function getAllLaosLotto() {
  return data;
}

export function getLaosLottoBySlug(slug: string) {
  return data.find((item) => item.slug === slug) || null;
}