import { QuizQuestion } from './types';

export const SAMPLE_QUESTION: QuizQuestion = {
  id: 'q1',
  question: 'An animal cell contains:',
  toggleGroups: [
    {
      id: 'g1',
      options: [
        { id: 'opt1', label: 'Cell wall', isCorrect: false },
        { id: 'opt2', label: 'Membrane', isCorrect: true },
      ],
    },
    {
      id: 'g2',
      options: [
        { id: 'opt3', label: 'Cytoplasm', isCorrect: true },
        { id: 'opt4', label: 'Chloroplast', isCorrect: false },
      ],
    },
  ],
};
