import data from "../data/hanoilotto.json";

export function getAllHanoiLotto() {
  return data;
}

export function getHanoiLottoBySlug(slug: string) {
  return data.find((item) => item.slug === slug) || null;
}