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
    id: string;
    question: string;
    toggleGroups: ToggleGroup[];
  }