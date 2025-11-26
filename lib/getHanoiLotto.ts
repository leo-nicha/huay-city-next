import data from "../data/hanoilottoresult.json";

export function getAllHanoiLottoResult() {
  return data;
}

export function getHanoiType(type: "special" | "normal" | "vip") {
  return data.map((item) => ({
    date: item.date,
    ...item.hanoi_lottery[type],
  }));
}