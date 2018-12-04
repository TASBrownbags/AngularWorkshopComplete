import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../hero';

@Component({
  selector: 'app-herotable',
  templateUrl: './herotable.component.html',
  styleUrls: ['./herotable.component.css']
})
export class HerotableComponent implements OnInit {

  @Input() heroes: Hero[];
  @Output() Delete = new EventEmitter<Hero>();
  constructor() { }

  ngOnInit() {
  }

  deleteHero (hero: Hero) {
    this.Delete.emit(hero);
  }
}
