import { Injectable } from '@nestjs/common';
import { Particle } from 'classes/particle';

@Injectable()
export class AppService {
  root(): string {
    return 'Hello World!';
  }
}
