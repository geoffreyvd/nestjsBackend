import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ParticleService } from 'services/particleService';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ParticleService],
})
export class AppModule {}
