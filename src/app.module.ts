import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DB_URL } from './config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QaModule } from './qa/qa.module';

@Module({
  imports: [MongooseModule.forRoot(DB_URL), QaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
