"use client";

import {
  createContext,
  useContext,
  useReducer,
  ReactNode,
  useEffect,
} from "react";
import type { QuizQuestion } from "@/src/lib/types";
import { questionsService } from "@/src/lib/db/questions-service";

interface ToggleState {
  currentQuestion: QuizQuestion | null;
  selectedOptions: Record<string, string>;
  isLocked: boolean;
  correctCount: number;
  isLoading: boolean;
}

type ToggleAction =
  | { type: "SELECT_OPTION"; groupId: string; optionId: string }
  | { type: "SET_QUESTION"; question: QuizQuestion }
  | { type: "CHECK_ANSWERS" }
  | { type: "RESET" }
  | { type: "SET_LOADING"; isLoading: boolean };

const initialState: ToggleState = {
  currentQuestion: null,
  selectedOptions: {},
  isLocked: false,
  correctCount: 0,
  isLoading: true,
};

function toggleReducer(state: ToggleState, action: ToggleAction): ToggleState {
  switch (action.type) {
    case "SET_QUESTION":
      return {
        ...state,
        currentQuestion: action.question,
        selectedOptions: Object.fromEntries(
          action.question.toggleGroups.map((group) => [
            group.id,
            Math.random() < 0.5 ? group.leftOption.id : group.rightOption.id,
          ])
        ),
        isLocked: false,
        correctCount: 0,
        isLoading: false,
      };
    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.isLoading,
      };
    case "SELECT_OPTION": {
      const newSelectedOptions = {
        ...state.selectedOptions,
        [action.groupId]: action.optionId,
      };

      const correctCount = state.currentQuestion?.toggleGroups.reduce(
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
        correctCount === state.currentQuestion?.toggleGroups.length;

      return {
        ...state,
        selectedOptions: newSelectedOptions,
        correctCount: correctCount || 0,
        isLocked: allCorrect,
      };
    }
    case "CHECK_ANSWERS": {
      const correctCount = state.currentQuestion?.toggleGroups.reduce(
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
        correctCount === state.currentQuestion?.toggleGroups.length;

      return {
        ...state,
        correctCount: correctCount || 0,
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

  useEffect(() => {
    async function loadInitialQuestion() {
      dispatch({ type: "SET_LOADING", isLoading: true });
      try {
        const question = await questionsService.getRandomQuestion();
        dispatch({ type: "SET_QUESTION", question });
      } catch (error) {
        console.error("Failed to load question:", error);
      }
    }

    loadInitialQuestion();
  }, []);

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
