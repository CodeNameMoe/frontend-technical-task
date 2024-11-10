"use client";

import { ToggleButton } from "./toggle-button";
import { TripleToggleButton } from "./triple-toggle-button";
import { ToggleGroup as ToggleGroupType } from "@/src/lib/types";
import { useToggle } from "@/src/context/toggle-context";

interface ToggleGroupProps {
  group: ToggleGroupType;
  isSelected: boolean;
  onToggle: (value: boolean) => void;
}

export function ToggleGroup({ group, isSelected, onToggle }: ToggleGroupProps) {
  const { state, dispatch } = useToggle();
  const selectedOptionId = state.selectedOptions[group.id];
  const selectedIndex = group.options.findIndex(
    (opt) => opt.id === selectedOptionId
  );

  const handleToggle = (newIndex: number) => {
    dispatch({
      type: "SELECT_OPTION",
      groupId: group.id,
      optionId: group.options[newIndex].id,
    });
  };

  return (
    <div
      className={`w-full ${
        isSelected ? "selected-styles" : "unselected-styles"
      }`}
      onClick={() => onToggle(!isSelected)}
    >
      {group.options.length === 2 ? (
        <ToggleButton
          leftOption={group.options[0]}
          rightOption={group.options[1]}
          isLeftSelected={selectedIndex === 0}
          isLocked={state.isLocked}
          onToggle={() => handleToggle(selectedIndex === 0 ? 1 : 0)}
        />
      ) : (
        <TripleToggleButton
          options={group.options}
          selectedIndex={selectedIndex}
          isLocked={state.isLocked}
          onToggle={handleToggle}
        />
      )}
    </div>
  );
}
