"use client";

import { createContext, useContext, useReducer, ReactNode } from "react";
import { QuizQuestion } from "@/src/lib/types";
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
  selectedOptions: {},
  isLocked: false,
  correctCount: 0,
};

function toggleReducer(state: ToggleState, action: ToggleAction): ToggleState {
  switch (action.type) {
    case "SELECT_OPTION":
      if (state.isLocked) return state;
      return {
        ...state,
        selectedOptions: {
          ...state.selectedOptions,
          [action.groupId]: action.optionId,
        },
      };
    case "CHECK_ANSWERS":
      const correctCount = state.currentQuestion.toggleGroups.reduce(
        (count, group) => {
          const selectedOption = group.options.find(
            (opt) => opt.id === state.selectedOptions[group.id]
          );
          return count + (selectedOption?.isCorrect ? 1 : 0);
        },
        0
      );

      return {
        ...state,
        isLocked: true,
        correctCount,
      };
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
