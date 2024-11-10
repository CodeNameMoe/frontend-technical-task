import { questions } from './questions';
import { QuizQuestion } from '../types';

const ARTIFICIAL_DELAY = 500;

export const questionsService = {
  async getAll(): Promise<QuizQuestion[]> {
    await new Promise(resolve => setTimeout(resolve, ARTIFICIAL_DELAY));
    return questions;
  },

  async getById(id: number): Promise<QuizQuestion | undefined> {
    await new Promise(resolve => setTimeout(resolve, ARTIFICIAL_DELAY));
    return questions.find(q => q.id === id);
  },

  async getRandomQuestion(): Promise<QuizQuestion> {
    await new Promise(resolve => setTimeout(resolve, ARTIFICIAL_DELAY));
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }
}; 