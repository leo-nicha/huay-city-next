import data from "../data/lottoenvelope.json";

export function getAllLottoEnvelope() {
  return data;
}

export function getLottoEnvelopeBySlug(slug: string) {
  return data.find((item) => item.slug === slug) || null;
}