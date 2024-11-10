"use client";

import { motion } from "framer-motion";
import { ToggleOption } from "@/src/lib/types";

interface TripleToggleButtonProps {
  options: ToggleOption[];
  selectedIndex: number;
  onToggle: (index: number) => void;
  isLocked: boolean;
}

export function TripleToggleButton({
  options,
  selectedIndex,
  onToggle,
  isLocked,
}: TripleToggleButtonProps) {
  return (
    <div
      className="
        relative w-full h-14
        rounded-[2.4rem]
        border-2 border-white/60
        overflow-hidden
        cursor-pointer
        disabled:cursor-not-allowed
      "
    >
      <motion.div
        className="absolute top-0.5 bottom-0.5 w-[calc(33.33%-2px)] 
                   rounded-[2.4rem] bg-white/60"
        animate={{
          x: `calc(${selectedIndex * 100}% + ${selectedIndex * 2}px)`,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 30,
        }}
      />

      <div className="relative z-10 flex justify-between items-center h-full">
        {options.map((option, index) => (
          <motion.span
            key={option.id}
            className="flex-1 text-center text-base sm:text-lg font-medium cursor-pointer"
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
