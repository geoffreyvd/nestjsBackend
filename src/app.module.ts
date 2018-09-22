import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CollisionController } from './CollisionController';
import { AppService } from './app.service';
import { ParticleService } from 'services/particleService';
import { CollisionService } from 'services/collisionService';

@Module({
  imports: [],
  controllers: [AppController, CollisionController],
  providers: [AppService, ParticleService, CollisionService],
})
export class AppModule {}
