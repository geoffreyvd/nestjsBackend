import { Injectable } from '@nestjs/common';
import { Collision } from 'classes/collision';

@Injectable()
export class CollisionService {
    private readonly collisions: Collision[] = [{id: 1, particles: [
        {id: 1, name: 'foton', energy: 0, speed: 3436821, mass: 0},
        {id: 3, name: 'foton', energy: 0, speed: 3436821, mass: 0}],
        date: null, event: 9,
        recources: ["particels", "2", "/particle/1", "/particle/3"]},
        {id: 1, particles: [
        {id: 1, name: 'foton', energy: 0, speed: 3436821, mass: 0},
        {id: 3, name: 'foton', energy: 0, speed: 3436821, mass: 0}],
        date: null, event: 9, recources: ["particels", "2", "/particle/1",
        "/particle/3"]}];

    create(collision: Collision): Collision[]{
        this.collisions.push(collision);
        return this.collisions;
    }

    read(): Collision[]{
        return this.collisions;
    }

    readOne(id: number): Collision{
        return this.collisions.find(element => {
            return element.id === id;
        });
    }

    updateOne(id: number, item: Collision): Collision{
        return this.collisions[id] = item;
    }

    deleteOne(id: number){
        for (let index = 0; index < this.collisions.length; index++) {
            id === this.collisions[index].id;
            return this.collisions.splice(index, 1);
        }
        return null;
    }

    findall(): Collision[]{
       return this.collisions;
    }
}