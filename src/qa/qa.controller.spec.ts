import { Test, TestingModule } from '@nestjs/testing';
import { QaController } from './qa.controller';

describe('Qa Controller', () => {
  let controller: QaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QaController],
    }).compile();

    controller = module.get<QaController>(QaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
