export interface ToggleOption {
  id: string;
  label: string;
  isCorrect: boolean;
}

export interface ToggleGroup {
  id: string;
  options: ToggleOption[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  toggleGroups: ToggleGroup[];
}