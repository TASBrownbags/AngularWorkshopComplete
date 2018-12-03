import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Mr. Hundred Percent', birthday: new Date('01/01/2000'), powerLevelID: 3},
      { id: 12, name: 'The Blocker', birthday: new Date('01/01/2000'), powerLevelID: 2 },
      { id: 13, name: 'Compliance' , birthday: new Date('01/01/2000'), powerLevelID: 3},
      { id: 14, name: 'Earthquake', birthday: new Date('01/01/2000'), powerLevelID: 1 },
      { id: 15, name: 'I Did This', birthday: new Date('01/01/2000'), powerLevelID: 2 },
      { id: 16, name: 'NASA', birthday: new Date('01/01/2000'), powerLevelID: 3 },
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
