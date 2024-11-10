import { gradients } from "./colors";
import { ToggleGroup } from "./types";

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

export function getRandomToggles(toggleGroups: ToggleGroup[]): Record<string, string> {
  return Object.fromEntries(
    toggleGroups.map((group) => {
      const correctOptionIndex = group.options.findIndex(opt => opt.isCorrect);
      let selectedIndex;

      do {
        selectedIndex = Math.floor(Math.random() * group.options.length);
      } while (selectedIndex === correctOptionIndex);

      return [group.id, group.options[selectedIndex].id];
    })
  );
}
