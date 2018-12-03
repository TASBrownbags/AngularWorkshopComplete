import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';
import { PowerLevel } from '../powerLevel';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  PowerLevels: PowerLevel[];

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private demoService: DemoService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
    this.PowerLevels = this.heroService.getPowerLevels();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }

 save(): void {
    this.demoService.updateHero(this.hero)
      .subscribe(() => this.goBack());
  }
}
