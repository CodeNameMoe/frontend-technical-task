"use client";

import { ToggleButton } from "./toggle-button";
import { TripleToggleButton } from "./triple-toggle-button";
import { ToggleGroup as ToggleGroupType } from "@/src/lib/types";
import { useToggle } from "@/src/context/toggle-context";
import { useCallback, useEffect, useState } from "react";

interface ToggleGroupProps {
  group: ToggleGroupType;
  onToggle: (groupId: string, optionId: string) => void;
}

export function ToggleGroup({ group, onToggle }: ToggleGroupProps) {
  const { state } = useToggle();
  const selectedOptionId = state.selectedOptions[group.id];
  const selectedIndex = group.options.findIndex(
    (opt) => opt.id === selectedOptionId
  );

  const handleToggle = (newIndex: number) => {
    if (!state.isLocked) {
      onToggle(group.id, group.options[newIndex].id);
    }
  };

  const hasLongLabels = group.options.some((opt) => opt.label.length > 15);

  const shouldBeVertical = useCallback(() => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 640 && hasLongLabels;
  }, [hasLongLabels]);

  const [isVertical, setIsVertical] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsVertical(shouldBeVertical());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [shouldBeVertical]);

  return (
    <div data-testid="toggle-group" className="flex flex-col gap-4 w-full">
      {group.options.length === 2 ? (
        <ToggleButton
          data-testid="toggle-options"
          leftOption={group.options[0]}
          rightOption={group.options[1]}
          isLeftSelected={selectedIndex === 0}
          isLocked={state.isLocked}
          onToggle={() => handleToggle(selectedIndex === 0 ? 1 : 0)}
          isVertical={isVertical}
        />
      ) : (
        <TripleToggleButton
          data-testid="toggle-options"
          options={group.options}
          selectedIndex={selectedIndex}
          isLocked={state.isLocked}
          onToggle={handleToggle}
          isVertical={isVertical}
        />
      )}
    </div>
  );
}
