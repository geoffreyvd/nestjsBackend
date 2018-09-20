import { Get, Controller, Post, Delete, Put, Body, Param} from '@nestjs/common';
import { AppService } from './app.service';
import { Particle } from 'classes/particle';
import { Collision } from 'classes/collision';
import { ParticleService } from 'services/particleService';

@Controller()
export class AppController {
  constructor(private readonly particleService: ParticleService) {}

  @Get()
  root(): string {
    return "version: 1.0.1";
  }

  @Get('/particle')
  async findParticle(@Param() params) {
    return this.particleService.read();
  }

  @Get('/particle:id')
  async findOneParticle(@Param() params) {
    return this.particleService.readOne(params.id);
  }

  @Post("/particle")
  async create(@Body() createParticle: Particle) {
      return this.particleService.create(createParticle);
  }

  @Delete("/particle:id")
  async delete(@Param() params) {
      return this.particleService.deleteOne(params.id);
  }

  @Put("/particle:id")
  async update(@Param() params, @Body() updateParticle: Particle) {
      return this.particleService.updateOne(params.id, updateParticle);
  }

  @Post("/collision")
  async createCollision(@Body() collision: Collision) {
    //this.appService.createParticle(collision);
  }
}

