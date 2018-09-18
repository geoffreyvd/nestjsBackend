import { Injectable } from '@nestjs/common';
import { Particle } from 'classes/particle';

@Injectable()
export class ParticleService {
    private readonly particels: Particle[] = [];
    
    create(particle: Particle): string{
        this.particels.push(particle);
        return "succes";
    }
 
    findall(): Particle[]{
       return this.particels;
    }
}