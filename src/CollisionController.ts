import { Get, Controller, Post, Delete, Put, Body, Param} from '@nestjs/common';
import { AppService } from './app.service';
import { Particle } from './classes/particle';
import { Collision } from './classes/collision';
import { CollisionService } from "./services/collisionService"

@Controller()
export class CollisionController {
  constructor(private readonly collisionService: CollisionService) {}
  
  //Collision end points

  @Get('/collision')
  async findCollision(@Param() params) {
    return this.collisionService.read();
  }

  @Get('/collision:id')
  async findOneCollision(@Param() params) {
    return this.collisionService.readOne(params.id);
  }

  @Post('/collision')
  async createCollision(@Body() createCollision: Collision) {
      return this.collisionService.create(createCollision);
  }

  @Delete('/collision:id')
  async deleteCollision(@Param() params) {
      return this.collisionService.deleteOne(params.id);
  }

  @Put('/collision:id')
  async updateCollision(@Param() params, @Body() updateCollision: Collision) {
      return this.collisionService.updateOne(params.id, updateCollision);
  }
}
