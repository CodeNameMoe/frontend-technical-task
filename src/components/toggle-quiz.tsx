"use client";

import { useEffect } from "react";
import { ToggleGroup } from "./toggle-group";
import { useToggle } from "@/src/context/toggle-context";
import { motion } from "framer-motion";
import { getGradientColors, getRandomToggles } from "@/src/lib/utils";
import { questionsService } from "@/src/lib/db/questions-service";

export function ToggleQuiz() {
  const { state, dispatch } = useToggle();

  useEffect(() => {
    if (state.currentQuestion) {
      const initialSelections = getRandomToggles(
        state.currentQuestion.toggleGroups
      );

      Object.entries(initialSelections).forEach(([groupId, optionId]) => {
        dispatch({
          type: "SELECT_OPTION",
          groupId,
          optionId,
        });
      });

      dispatch({ type: "CHECK_ANSWERS" });
    }
  }, [dispatch, state.currentQuestion]);

  useEffect(() => {
    if (Object.keys(state.selectedOptions).length > 0) {
      dispatch({ type: "CHECK_ANSWERS" });
    }
  }, [state.selectedOptions, dispatch]);

  const correctRatio =
    state.correctCount / (state.currentQuestion?.toggleGroups.length || 0);
  const colors = getGradientColors(correctRatio);

  const handleToggleChange = (groupId: string, optionId: string) => {
    dispatch({
      type: "SELECT_OPTION",
      groupId,
      optionId,
    });
  };

  const handleNextQuestion = async () => {
    dispatch({ type: "SET_LOADING", isLoading: true });
    try {
      const question = await questionsService.getRandomQuestion();
      dispatch({ type: "SET_QUESTION", question });
    } catch (error) {
      console.error("Failed to load next question:", error);
    }
  };

  if (state.isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900" />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-3 xs:p-4 sm:p-6 md:p-8 lg:p-12">
      <motion.div
        data-testid="quiz-container"
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
            {state.currentQuestion?.question}
          </h1>
          <div className="space-y-4 sm:space-y-6">
            {state.currentQuestion?.toggleGroups.map((group) => (
              <ToggleGroup
                key={group.id}
                group={group}
                onToggle={handleToggleChange}
              />
            ))}
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 sm:mt-8 text-base xs:text-lg sm:text-xl md:text-2xl font-semibold text-white text-center"
          >
            {Object.keys(state.selectedOptions).length ===
              state.currentQuestion?.toggleGroups.length &&
              (state.isLocked
                ? "The answer is correct"
                : "The answer is incorrect")}
          </motion.h2>

          {state.isLocked && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8 px-6 py-3 bg-white/20 rounded-full text-white font-medium"
              onClick={handleNextQuestion}
            >
              Next Question
            </motion.button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
