import { Schema } from 'mongoose';

import { AnswerSchema } from './answer.schema';

export const QuestionSchema = new Schema({
  text: String,
  answers: [AnswerSchema],
});
