import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Question } from './interfaces/question.interface';
import { QuestionCreateDto } from './dto/question-create.dto';

@Injectable()
export class QaService {

  constructor(@InjectModel('Question') private readonly questionModel: Model<Question>) { }

  async create(data: QuestionCreateDto): Promise<Question> {
    const question = new this.questionModel(data);
    return await question.save();
  }

  async update(data: QuestionCreateDto, id: string): Promise<Question> {
    return await this.questionModel.findByIdAndUpdate(id, data, {new: true});
  }

  async findAll(): Promise<Question[]> {
    return await this.questionModel.find().exec();
  }
}
