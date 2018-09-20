import { ApiModelProperty } from '@nestjs/swagger';
import { Particle } from './particle';

export class Collision {
  @ApiModelProperty()
  readonly id: number;

  @ApiModelProperty({ type: [Particle] })
  readonly particles: Particle[];

  @ApiModelProperty()
  readonly date: Date;

  @ApiModelProperty()
  readonly event: number;
}