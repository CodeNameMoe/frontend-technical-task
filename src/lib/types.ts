export interface ToggleOption {
  id: string;
  label: string;
  isCorrect: boolean;
}
export interface ToggleGroup {
  id: string;
  leftOption: ToggleOption;
  rightOption: ToggleOption;
}
export interface QuizQuestion {
  id: number;
  question: string;
  toggleGroups: ToggleGroup[];
}