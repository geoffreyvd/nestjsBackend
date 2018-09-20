import { ApiModelProperty } from '@nestjs/swagger';

export class Particle {
  @ApiModelProperty()
  readonly id: number;

  @ApiModelProperty()
  readonly name: string;

  @ApiModelProperty()
  readonly energy: number;

  @ApiModelProperty()
  readonly speed: number;

  @ApiModelProperty()
  readonly mass: number;
}