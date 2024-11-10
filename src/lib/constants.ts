import { QuizQuestion } from './types';

export const SAMPLE_QUESTION: QuizQuestion = {
  id: 1,
  question: 'An animal cell contains:',
  toggleGroups: [
    {
      id: 'g1',
      leftOption: { 
        id: 'l1', 
        label: 'Cell wall', 
        isCorrect: false 
      },
      rightOption: { 
        id: 'r1', 
        label: 'Ribosomes', 
        isCorrect: true 
      }
    },
    {
      id: 'g2',
      leftOption: { 
        id: 'l2', 
        label: 'Cytoplasm', 
        isCorrect: true 
      },
      rightOption: { 
        id: 'r2', 
        label: 'Chloroplast', 
        isCorrect: false 
      }
    },
    {
      id: 'g3',
      leftOption: { id: 'l3', label: 'Partially permeable membrane', isCorrect: true },
      rightOption: { id: 'r3', label: 'Impermeable membrane', isCorrect: false }
    },
    {
      id: 'g4',
      leftOption: { id: 'l4', label: 'Cellulose', isCorrect: false },
      rightOption: { id: 'r4', label: 'Mitochondria', isCorrect: true }
    }
  ]
};

