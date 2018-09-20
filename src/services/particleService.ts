import { Injectable } from '@nestjs/common';
import { Particle } from 'classes/particle';

@Injectable()
export class ParticleService {
    private readonly particels: Particle[] = [{id: 1, name: "foton", energy: 0, speed: 3436821, mass: 0},
    {id: 3, name: "proton", energy: 1, speed: 3436821, mass: 3},
    {id: 5, name: "neutron", energy:1, speed: 3436821, mass: 2},
    {id: 6, name: "up quark", energy: 1, speed: 3436821, mass: 1}];

    create(particle: Particle): Particle[]{
        this.particels.push(particle);
        return this.particels;
    }

    read(): Particle[]{
        return this.particels;
    }
    
    readOne(id: number): Particle{
        return this.particels.find(element => {
            return element.id == id
        });
    }

    updateOne(id: number, item: Particle): Particle{
        return this.particels[id] = item;        
    }

    deleteOne(id: number){
        for (let index = 0; index < this.particels.length; index++) {
            id == this.particels[index].id;
            return this.particels.splice(index, 1);
        }
        return null;
    }    
 
    findall(): Particle[]{
       return this.particels;
    }
}