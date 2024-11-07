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
    {
        id: 'g3',
        options: [
          { id: 'opt5', label: 'Partially permeable membrane', isCorrect: true },
          { id: 'opt6', label: 'Impermeable membrane', isCorrect: false },
        ],
      },
      {
        id: 'g4',
        options: [
          { id: 'opt7', label: 'Cellulose', isCorrect: false },
          { id: 'opt8', label: 'Mitochondria', isCorrect: true },
        ],
      },
  ],
};
