import data from "../data/luckynumber.json";

export function getAllLuckyNumber() {
  return data;
}

export function getLuckyNumberBySlug(slug: string) {
  return data.find((item) => item.slug === slug) || null;
}