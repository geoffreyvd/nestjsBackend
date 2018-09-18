import { Get, Controller, Post, Body} from '@nestjs/common';
import { AppService } from './app.service';
import { Particle } from 'classes/particle';
import { Collision } from 'classes/collision';
import { ParticleService } from 'services/particleService';

@Controller()
export class AppController {
  constructor(private readonly particleService: ParticleService) {}

  @Get()
  root(): string {
    return "yo";
  }

  @Post()
    async create(@Body() createParticle: Particle) {
    this.particleService.create(createParticle);
  }

  @Post("/collision")
    async createCollision(@Body() collision: Collision) {
    //this.appService.createParticle(collision);
  }
}

