import { Answer } from './answer.interface';

export interface Question {
  text: string;
  answers: Answer[];
}
