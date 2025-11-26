import data from "../data/laoslottoresult.json";

export function getAllLaosLotto() {
  return data[0].draws;
}

export function getLaosLottoByDate(date: string) {
  return data[0].draws.find((d) => d.date === date) || null;
}