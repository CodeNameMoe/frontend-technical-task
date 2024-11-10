import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: 'An animal cell contains:',
    toggleGroups: [
      {
        id: 'g1',
        leftOption: { id: 'l1', label: 'Cell wall', isCorrect: false },
        rightOption: { id: 'r1', label: 'Ribosomes', isCorrect: true }
      },
      {
        id: 'g2',
        leftOption: { id: 'l2', label: 'Cytoplasm', isCorrect: true },
        rightOption: { id: 'r2', label: 'Chloroplast', isCorrect: false }
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
  },
  {
    id: 2,
    question: 'Which of these are planets in our solar system?',
    toggleGroups: [
      {
        id: 'g1',
        leftOption: { id: 'l1', label: 'Pluto', isCorrect: false },
        rightOption: { id: 'r1', label: 'Neptune', isCorrect: true }
      },
      {
        id: 'g2',
        leftOption: { id: 'l2', label: 'Saturn', isCorrect: true },
        rightOption: { id: 'r2', label: 'Titan', isCorrect: false }
      },
      {
        id: 'g3',
        leftOption: { id: 'l3', label: 'Europa', isCorrect: false },
        rightOption: { id: 'r3', label: 'Mars', isCorrect: true }
      }
    ]
  },
  {
    id: 3,
    question: 'Which of these are programming languages?',
    toggleGroups: [
      {
        id: 'g1',
        leftOption: { id: 'l1', label: 'HTML', isCorrect: false },
        rightOption: { id: 'r1', label: 'Python', isCorrect: true }
      },
      {
        id: 'g2',
        leftOption: { id: 'l2', label: 'JavaScript', isCorrect: true },
        rightOption: { id: 'r2', label: 'Photoshop', isCorrect: false }
      },
      {
        id: 'g3',
        leftOption: { id: 'l3', label: 'CSS', isCorrect: false },
        rightOption: { id: 'r3', label: 'Ruby', isCorrect: true }
      }
    ]
  }
]; 