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

export function getRandomToggles(
  toggleGroups: ToggleGroup[]
): Record<string, string> {
  let attempts = 0;
  let selections: Record<string, string>;

  do {
    selections = Object.fromEntries(
      toggleGroups.map((group) => {
        const selectedIndex = Math.floor(Math.random() * group.options.length);
        return [group.id, group.options[selectedIndex].id];
      })
    );

    const allCorrect = toggleGroups.every((group) => {
      const selectedId = selections[group.id];
      const selectedOption = group.options.find((opt) => opt.id === selectedId);
      return selectedOption?.isCorrect;
    });

    if (!allCorrect || attempts > 10) break;
    attempts++;
  } while (true);

  const allCorrect = toggleGroups.every((group) => {
    const selectedId = selections[group.id];
    const selectedOption = group.options.find((opt) => opt.id === selectedId);
    return selectedOption?.isCorrect;
  });

  if (allCorrect) {
    const firstGroup = toggleGroups[0];
    const incorrectOption = firstGroup.options.find((opt) => !opt.isCorrect);
    if (incorrectOption) {
      selections[firstGroup.id] = incorrectOption.id;
    }
  }

  return selections;
}
