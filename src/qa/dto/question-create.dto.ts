import { Answer } from '../interfaces/answer.interface';

export class QuestionCreateDto {
  readonly text: string;
  readonly answers: Answer[];
}
