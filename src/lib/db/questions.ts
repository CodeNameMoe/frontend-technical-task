import { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: 'An animal cell contains:',
    toggleGroups: [
      {
        id: 'g1',
        options: [
          { id: 'l1', label: 'Cell wall', isCorrect: false },
          { id: 'r1', label: 'Ribosomes', isCorrect: true }
        ]
      },
      {
        id: 'g2',
        options: [
          { id: 'l2', label: 'Cytoplasm', isCorrect: true },
          { id: 'r2', label: 'Chloroplast', isCorrect: false }
        ]
      },
      {
        id: 'g3',
        options: [
          { id: 'l3', label: 'Partially permeable membrane', isCorrect: true },
          { id: 'r3', label: 'Impermeable membrane', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 2,
    question: 'Which of these are programming languages?',
    toggleGroups: [
      {
        id: 'g1',
        options: [
          { id: 'l1', label: 'HTML', isCorrect: false },
          { id: 'r1', label: 'Python', isCorrect: true }
        ]
      },
      {
        id: 'g2',
        options: [
          { id: 'l2', label: 'JavaScript', isCorrect: true },
          { id: 'r2', label: 'Photoshop', isCorrect: false }
        ]
      },
      {
        id: 'g3',
        options: [
          { id: 'l3', label: 'CSS', isCorrect: false },
          { id: 'r3', label: 'Ruby', isCorrect: true }
        ]
      }
    ]
  },
  {
    id: 3,
    question: 'Which are the best football teams?',
    toggleGroups: [
      {
        id: 'g1',
        options: [
          { id: 'opt1', label: 'Liverpool', isCorrect: true },
          { id: 'opt2', label: 'Chelsea', isCorrect: false },
          { id: 'opt3', label: 'Man Utd', isCorrect: false }
        ]
      },
      {
        id: 'g2',
        options: [
          { id: 'opt4', label: 'Real Madrid', isCorrect: true },
          { id: 'opt5', label: 'Barcelona', isCorrect: false },
          { id: 'opt6', label: 'Atletico', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 4,
    question: 'Select the correct capital cities:',
    toggleGroups: [
      {
        id: 'g1',
        options: [
          { id: 'opt1', label: 'Paris', isCorrect: true },
          { id: 'opt2', label: 'Lyon', isCorrect: false },
          { id: 'opt3', label: 'Marseille', isCorrect: false }
        ]
      },
      {
        id: 'g2',
        options: [
          { id: 'opt4', label: 'Rome', isCorrect: true },
          { id: 'opt5', label: 'Milan', isCorrect: false },
          { id: 'opt6', label: 'Naples', isCorrect: false }
        ]
      },
      {
        id: 'g3',
        options: [
          { id: 'opt7', label: 'Madrid', isCorrect: true },
          { id: 'opt8', label: 'Barcelona', isCorrect: false },
          { id: 'opt9', label: 'Valencia', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 5,
    question: 'Choose the correct scientific classifications:',
    toggleGroups: [
      {
        id: 'g1',
        options: [
          { id: 'opt1', label: 'Mammal', isCorrect: true },
          { id: 'opt2', label: 'Reptile', isCorrect: false },
          { id: 'opt3', label: 'Fish', isCorrect: false }
        ]
      },
      {
        id: 'g2',
        options: [
          { id: 'opt4', label: 'Dolphin', isCorrect: true },
          { id: 'opt5', label: 'Shark', isCorrect: false }
        ]
      }
    ]
  }
]; 