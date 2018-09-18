import { ApiModelProperty } from '@nestjs/swagger';
import { Particle } from './particle';

export class Collision {
  @ApiModelProperty({ type: [Particle] })
  readonly particles: Particle[];

  @ApiModelProperty()
  readonly age: number;

  @ApiModelProperty()
  readonly breed: string;
}