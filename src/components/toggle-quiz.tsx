"use client";

import { useMemo } from "react";
import { ToggleGroup } from "./toggle-group";
import { useToggle } from "@/src/context/toggle-context";
import { motion } from "framer-motion";
import { getGradientColors, getRandomToggles } from "@/src/lib/utils";

export function ToggleQuiz() {
  const { state } = useToggle();

  const toggleStates = useMemo(() => {
    const states = getRandomToggles(
      state.currentQuestion.id,
      state.currentQuestion.toggleGroups.length
    );
    return states;
  }, [state.currentQuestion.id, state.currentQuestion.toggleGroups.length]);

  const correctRatio =
    state.correctCount / state.currentQuestion.toggleGroups.length;
  const colors = getGradientColors(correctRatio);

  const handleToggleChange = (index: number, value: boolean) => {
    toggleStates[index] = value;
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-3 xs:p-4 sm:p-6 md:p-8 lg:p-12">
      <motion.div
        className="w-full max-w-[1200px] rounded-2xl xs:rounded-3xl overflow-hidden"
        style={{
          background: `linear-gradient(180deg, ${colors.from} 0%, ${colors.to} 100%)`,
        }}
        animate={{
          background: `linear-gradient(180deg, ${colors.from} 0%, ${colors.to} 100%)`,
        }}
        initial={false}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      >
        <div className="absolute inset-0 bg-white/5" />

        <div className="relative p-4 xs:p-6 sm:p-8 md:p-12 lg:p-16">
          <h1 className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-6 sm:mb-8 md:mb-12 text-center">
            {state.currentQuestion.question}
          </h1>

          <div className="space-y-4 sm:space-y-6">
            {state.currentQuestion.toggleGroups.map((group, index) => (
              <ToggleGroup
                key={group.id}
                group={group}
                isSelected={toggleStates[index]}
                onToggle={(value) => handleToggleChange(index, value)}
              />
            ))}
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 sm:mt-8 text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-white text-center"
          >
            {toggleStates.every((state) => state)
              ? "The answer is correct!"
              : "The answer is incorrect"}
          </motion.h2>
        </div>
      </motion.div>
    </div>
  );
}
