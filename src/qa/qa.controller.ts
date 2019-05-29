import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';

import { QaService } from './qa.service';
import { QuestionCreateDto } from './dto/question-create.dto';
import { Question } from './interfaces/question.interface';

@Controller('qa')
export class QaController {

  constructor(private readonly qaService: QaService) { }

  @Get()
  findAll(): Promise<Question[]> {
    return this.qaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id) { }

  @Post()
  create(@Body() data: QuestionCreateDto): Promise<Question> {
    return this.qaService.create(data);
  }

  @Put(':id')
  update(@Body() data, @Param('id') id): Promise<Question> {
    return this.qaService.update(data, id);
  }

  @Delete(':id')
  remove(@Param('id') id) { }
}
