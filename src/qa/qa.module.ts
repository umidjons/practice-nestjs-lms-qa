import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { QuestionSchema } from './schemas/question.schema';
import { QaController } from './qa.controller';
import { QaService } from './qa.service';


@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'Question', schema: QuestionSchema},
    ]),
  ],
  controllers: [QaController],
  providers: [QaService]
})
export class QaModule {}
