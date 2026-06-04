
export function calculateRisk(
  curahHujan: number,
  kelembapan: number,
  suhu: number
) {
  if (curahHujan > 200 && kelembapan > 80) {
    return {
      risk: "TINGGI",
      confidence: 87
    };
  }

  if (suhu > 34) {
    return {
      risk: "SEDANG",
      confidence: 72
    };
  }

  return {
    risk: "RENDAH",
    confidence: 45
  };
}
