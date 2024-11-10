import { gradients } from "./colors";

export function getGradientColors(ratio: number) {
  if (ratio === 1) {
    return gradients.complete;
  } else if (ratio >= 0.67) {
    return gradients.almost;
  } else if (ratio >= 0.34) {
    return gradients.middle;
  } else {
    return gradients.initial;
  }
}

export function getRandomToggles(questionId: number, count: number): boolean[] {
  const seed = questionId;
  const results = Array(count)
    .fill(0)
    .map((_, index) => {
      const value = Math.abs(Math.sin(seed + index * 69091)) * 10000;
      const result = value - Math.floor(value) < 0.5;

      return result;
    });

  return results;
}
