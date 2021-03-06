import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { PowerLevel } from '../powerLevel';
import { DemoService } from '../services/demo.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  newHeroName: string;
  constructor(private demoService: DemoService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.demoService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.demoService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
        this.newHeroName = '';
      }, error => {
        console.log(error)
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.demoService.deleteHero(hero).subscribe();
  }

}
