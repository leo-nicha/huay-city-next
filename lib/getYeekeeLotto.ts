import data from "../data/yeekeelotto.json";

export function getAllYeekeeLotto() {
  return data;
}

export function getYeekeeLottoBySlug(slug: string) {
  return data.find((item) => item.slug === slug) || null;
}
