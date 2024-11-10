"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";
import type { QuizQuestion } from "@/src/lib/types";
import { SAMPLE_QUESTION } from "@/src/lib/constants";

interface ToggleState {
  currentQuestion: QuizQuestion;
  selectedOptions: Record<string, string>;
  isLocked: boolean;
  correctCount: number;
}

type ToggleAction =
  | { type: "SELECT_OPTION"; groupId: string; optionId: string }
  | { type: "CHECK_ANSWERS" }
  | { type: "RESET" };

const initialState: ToggleState = {
  currentQuestion: SAMPLE_QUESTION,
  selectedOptions: {
    ...Object.fromEntries(
      SAMPLE_QUESTION.toggleGroups.map((group) => [
        group.id,
        Math.random() < 0.5 ? group.leftOption.id : group.rightOption.id,
      ])
    ),
  },
  isLocked: false,
  correctCount: 0,
};

function toggleReducer(state: ToggleState, action: ToggleAction): ToggleState {
  switch (action.type) {
    case "SELECT_OPTION": {
      const newSelectedOptions = {
        ...state.selectedOptions,
        [action.groupId]: action.optionId,
      };

      const correctCount = state.currentQuestion.toggleGroups.reduce(
        (count, group) => {
          const selectedId = newSelectedOptions[group.id];
          if (!selectedId) return count;

          const selectedOption =
            selectedId === group.leftOption.id
              ? group.leftOption
              : group.rightOption;

          return count + (selectedOption.isCorrect ? 1 : 0);
        },
        0
      );

      const allCorrect =
        correctCount === state.currentQuestion.toggleGroups.length;

      return {
        ...state,
        selectedOptions: newSelectedOptions,
        correctCount,
        isLocked: allCorrect,
      };
    }
    case "CHECK_ANSWERS": {
      const correctCount = state.currentQuestion.toggleGroups.reduce(
        (count, group) => {
          const selectedId = state.selectedOptions[group.id];
          if (!selectedId) return count;

          const selectedOption =
            selectedId === group.leftOption.id
              ? group.leftOption
              : group.rightOption;

          return count + (selectedOption.isCorrect ? 1 : 0);
        },
        0
      );

      const allCorrect =
        correctCount === state.currentQuestion.toggleGroups.length;

      return {
        ...state,
        correctCount,
        isLocked: allCorrect,
      };
    }
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

const ToggleContext = createContext<{
  state: ToggleState;
  dispatch: React.Dispatch<ToggleAction>;
} | null>(null);

export function ToggleProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(toggleReducer, initialState);

  return (
    <ToggleContext.Provider value={{ state, dispatch }}>
      {children}
    </ToggleContext.Provider>
  );
}

export function useToggle() {
  const context = useContext(ToggleContext);
  if (!context) {
    throw new Error("useToggle must be used within a ToggleProvider");
  }
  return context;
}
