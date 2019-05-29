import { Schema } from 'mongoose';

export const AnswerSchema = new Schema({
  text: String,
  isCorrect: Boolean,
});
