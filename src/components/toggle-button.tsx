"use client";

import { motion } from "framer-motion";
import { ToggleOption } from "@/src/lib/types";

interface ToggleButtonProps {
  leftOption: ToggleOption;
  rightOption: ToggleOption;
  isLeftSelected: boolean;
  onToggle: () => void;
  isLocked: boolean;
  isVertical?: boolean;
}

export function ToggleButton({
  leftOption,
  rightOption,
  isLeftSelected,
  onToggle,
  isLocked,
  isVertical = false,
}: ToggleButtonProps) {
  return (
    <div
      className={`
        relative w-full
        ${isVertical ? "h-auto" : "h-14"}
        rounded-[2.4rem]
        border-2 border-white/60
        overflow-hidden
        cursor-pointer
        disabled:cursor-not-allowed
      `}
      onClick={(e) => {
        e.stopPropagation();
        if (!isLocked) {
          onToggle();
        }
      }}
    >
      <motion.div
        className={`
          absolute 
          ${
            isVertical
              ? "left-0.5 right-0.5 h-[calc(50%-2px)]"
              : "top-0.5 bottom-0.5 w-[calc(50%-2px)]"
          }
          rounded-[2.4rem] 
          bg-white/60
        `}
        animate={{
          [isVertical ? "y" : "x"]: isLeftSelected ? "2px" : "calc(100% + 2px)",
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
        <motion.span
          className={`
            flex-1 text-center text-base sm:text-lg font-medium
            ${isVertical ? "py-3" : ""}
          `}
          animate={{
            color: isLeftSelected ? "rgb(31, 41, 55)" : "rgb(255, 255, 255)",
          }}
        >
          {leftOption.label}
        </motion.span>
        <motion.span
          className={`
            flex-1 text-center text-base sm:text-lg font-medium
            ${isVertical ? "py-3" : ""}
          `}
          animate={{
            color: !isLeftSelected ? "rgb(31, 41, 55)" : "rgb(255, 255, 255)",
          }}
        >
          {rightOption.label}
        </motion.span>
      </div>
    </div>
  );
}
