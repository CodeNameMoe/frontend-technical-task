"use client";

import { motion } from "framer-motion";
import { ToggleOption } from "@/src/lib/types";

interface TripleToggleButtonProps {
  options: ToggleOption[];
  selectedIndex: number;
  onToggle: (index: number) => void;
  isLocked: boolean;
  isVertical?: boolean;
}

export function TripleToggleButton({
  options,
  selectedIndex,
  onToggle,
  isLocked,
  isVertical = false,
}: TripleToggleButtonProps) {
  return (
    <div
      className={`
        relative w-full
        ${isVertical ? "h-auto" : "h-16 sm:h-20"}
        rounded-[2.4rem]
        border-2 border-white/60
        overflow-hidden
        cursor-pointer
        disabled:cursor-not-allowed
      `}
    >
      <motion.div
        className={`
          absolute 
          ${
            isVertical
              ? "left-0.5 right-0.5 h-[calc(33.33%-2px)] w-auto"
              : "top-0.5 bottom-0.5 w-[calc(33.33%-2px)] h-auto"
          }
          rounded-[2.4rem] 
          bg-white/60
        `}
        animate={{
          [isVertical ? "y" : "x"]: `calc(${selectedIndex * 100}% + ${
            selectedIndex * 2
          }px)`,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />

      <div
        className={`
        relative z-10 
        ${isVertical ? "flex-col h-auto py-2" : "flex-row h-full"}
        flex justify-between items-center
      `}
      >
        {options.map((option, index) => (
          <motion.span
            key={option.id}
            className={`
              flex-1 text-center text-base sm:text-lg font-medium cursor-pointer
              ${isVertical ? "py-3" : ""}
            `}
            animate={{
              color:
                selectedIndex === index
                  ? "rgb(31, 41, 55)"
                  : "rgb(255, 255, 255)",
            }}
            onClick={(e) => {
              e.stopPropagation();
              if (!isLocked) {
                onToggle(index);
              }
            }}
          >
            {option.label}
          </motion.span>
        ))}
      </div>
    </div>
  );
}
