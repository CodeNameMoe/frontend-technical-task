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
  },
  {
    id: 6,
    question: 'Which chemical equations are balanced?',
    toggleGroups: [
      {
        id: 'g1',
        options: [
          { id: 'l1', label: '2H₂ + O₂ → 2H₂O', isCorrect: true },
          { id: 'r1', label: 'H₂ + O₂ → H₂O', isCorrect: false }
        ]
      },
      {
        id: 'g2',
        options: [
          { id: 'l2', label: 'CH₄ + O₂ → CO₂ + H₂O', isCorrect: false },
          { id: 'r2', label: 'CH₄ + 2O₂ → CO₂ + 2H₂O', isCorrect: true }
        ]
      }
    ]
  },
  {
    id: 7,
    question: 'Select the correct mathematical statements:',
    toggleGroups: [
      {
        id: 'g1',
        options: [
          { id: 'l1', label: '(x + 2)² = x² + 4x + 4', isCorrect: true },
          { id: 'r1', label: '(x + 2)² = x² + 2x + 2', isCorrect: false }
        ]
      },
      {
        id: 'g2',
        options: [
          { id: 'l2', label: 'sin²θ + cos²θ = 1', isCorrect: true },
          { id: 'r2', label: 'sin²θ + cos²θ = 2', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 8,
    question: 'Which are examples of renewable energy?',
    toggleGroups: [
      {
        id: 'g1',
        options: [
          { id: 'l1', label: 'Solar power', isCorrect: true },
          { id: 'r1', label: 'Coal', isCorrect: false }
        ]
      },
      {
        id: 'g2',
        options: [
          { id: 'l2', label: 'Natural gas', isCorrect: false },
          { id: 'r2', label: 'Wind power', isCorrect: true }
        ]
      }
    ]
  },
  {
    id: 9,
    question: 'Identify the correct biological processes:',
    toggleGroups: [
      {
        id: 'g1',
        options: [
          { id: 'l1', label: 'Photosynthesis produces oxygen', isCorrect: true },
          { id: 'r1', label: 'Photosynthesis produces carbon dioxide', isCorrect: false }
        ]
      },
      {
        id: 'g2',
        options: [
          { id: 'l2', label: 'Respiration requires glucose', isCorrect: true },
          { id: 'r2', label: 'Respiration produces glucose', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 10,
    question: 'Which statements about atoms are correct?',
    toggleGroups: [
      {
        id: 'g1',
        options: [
          { id: 'l1', label: 'Protons have positive charge', isCorrect: true },
          { id: 'r1', label: 'Protons have negative charge', isCorrect: false }
        ]
      },
      {
        id: 'g2',
        options: [
          { id: 'l2', label: 'Neutrons have no charge', isCorrect: true },
          { id: 'r2', label: 'Neutrons have positive charge', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 11,
    question: 'Which are Shakespeare plays?',
    toggleGroups: [
      {
        id: 'g1',
        options: [
          { id: 'opt1', label: 'Macbeth', isCorrect: true },
          { id: 'opt2', label: 'The Canterbury Tales', isCorrect: false },
          { id: 'opt3', label: 'Paradise Lost', isCorrect: false }
        ]
      },
      {
        id: 'g2',
        options: [
          { id: 'opt4', label: 'Hamlet', isCorrect: true },
          { id: 'opt5', label: 'Beowulf', isCorrect: false },
          { id: 'opt6', label: 'The Faerie Queene', isCorrect: false }
        ]
      },
      {
        id: 'g3',
        options: [
          { id: 'opt7', label: 'King Lear', isCorrect: true },
          { id: 'opt8', label: 'Dr Faustus', isCorrect: false },
          { id: 'opt9', label: "The Pilgrim's Progress", isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 12,
    question: 'Match these physical quantities to SI units:',
    toggleGroups: [
      {
        id: 'g1',
        options: [
          { id: 'opt1', label: 'Force - Newton (N)', isCorrect: true },
          { id: 'opt2', label: 'Force - Watt (W)', isCorrect: false },
          { id: 'opt3', label: 'Force - Joule (J)', isCorrect: false }
        ]
      },
      {
        id: 'g2',
        options: [
          { id: 'opt4', label: 'Power - Watt (W)', isCorrect: true },
          { id: 'opt5', label: 'Power - Newton (N)', isCorrect: false },
          { id: 'opt6', label: 'Power - Pascal (Pa)', isCorrect: false }
        ]
      },
      {
        id: 'g3',
        options: [
          { id: 'opt7', label: 'Energy - Joule (J)', isCorrect: true },
          { id: 'opt8', label: 'Energy - Ampere (A)', isCorrect: false },
          { id: 'opt9', label: 'Energy - Kelvin (K)', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 13,
    question: 'Match elements to their symbols:',
    toggleGroups: [
      {
        id: 'g1',
        options: [
          { id: 'opt1', label: 'Sodium - Na', isCorrect: true },
          { id: 'opt2', label: 'Sodium - So', isCorrect: false },
          { id: 'opt3', label: 'Sodium - Sd', isCorrect: false }
        ]
      },
      {
        id: 'g2',
        options: [
          { id: 'opt4', label: 'Potassium - K', isCorrect: true },
          { id: 'opt5', label: 'Potassium - P', isCorrect: false },
          { id: 'opt6', label: 'Potassium - Pt', isCorrect: false }
        ]
      },
      {
        id: 'g3',
        options: [
          { id: 'opt7', label: 'Iron - Fe', isCorrect: true },
          { id: 'opt8', label: 'Iron - Ir', isCorrect: false },
          { id: 'opt9', label: 'Iron - In', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 14,
    question: 'Which are forces?',
    toggleGroups: [
      {
        id: 'g1',
        options: [
          { id: 'opt1', label: 'Gravity', isCorrect: true },
          { id: 'opt2', label: 'Temperature', isCorrect: false },
          { id: 'opt3', label: 'Mass', isCorrect: false }
        ]
      },
      {
        id: 'g2',
        options: [
          { id: 'opt4', label: 'Friction', isCorrect: true },
          { id: 'opt5', label: 'Volume', isCorrect: false },
          { id: 'opt6', label: 'Density', isCorrect: false }
        ]
      },
      {
        id: 'g3',
        options: [
          { id: 'opt7', label: 'Magnetism', isCorrect: true },
          { id: 'opt8', label: 'Pressure', isCorrect: false },
          { id: 'opt9', label: 'Weight', isCorrect: false }
        ]
      }
    ]
  },
  {
    id: 15,
    question: 'Which mathematical statements are true?',
    toggleGroups: [
      {
        id: 'g1',
        options: [
          { id: 'opt1', label: 'Hypotenuse is the longest side', isCorrect: true },
          { id: 'opt2', label: 'Hypotenuse is the shortest side', isCorrect: false },
          { id: 'opt3', label: 'Hypotenuse is the middle side', isCorrect: false }
        ]
      },
      {
        id: 'g2',
        options: [
          { id: 'opt4', label: 'Pi is approximately 3.14159', isCorrect: true },
          { id: 'opt5', label: 'Pi is exactly 22/7', isCorrect: false },
          { id: 'opt6', label: 'Pi is approximately 3.0', isCorrect: false }
        ]
      },
      {
        id: 'g3',
        options: [
          { id: 'opt7', label: 'Square root of 144 is 12', isCorrect: true },
          { id: 'opt8', label: 'Square root of 144 is 14', isCorrect: false },
          { id: 'opt9', label: 'Square root of 144 is 24', isCorrect: false }
        ]
      }
    ]
  }
]; 