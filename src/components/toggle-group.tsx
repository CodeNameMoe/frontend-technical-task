"use client";

import { ToggleButton } from "./toggle-button";
import { ToggleGroup as ToggleGroupType } from "@/src/lib/types";
import { useToggle } from "@/src/context/toggle-context";

interface ToggleGroupProps {
  group: ToggleGroupType;
  isSelected: boolean;
  onToggle: (value: boolean) => void;
}

export function ToggleGroup({ group, isSelected, onToggle }: ToggleGroupProps) {
  const { state, dispatch } = useToggle();

  const selectedOption = state.selectedOptions[group.id] ?? group.leftOption.id;
  const isLeftSelected = selectedOption === group.leftOption.id;

  return (
    <div
      className={`w-full ${
        isSelected ? "selected-styles" : "unselected-styles"
      }`}
      onClick={() => onToggle(!isSelected)}
    >
      <ToggleButton
        leftOption={group.leftOption}
        rightOption={group.rightOption}
        isLeftSelected={isLeftSelected}
        isLocked={state.isLocked}
        onToggle={() => {
          dispatch({
            type: "SELECT_OPTION",
            groupId: group.id,
            optionId: isLeftSelected
              ? group.rightOption.id
              : group.leftOption.id,
          });
        }}
      />
    </div>
  );
}
