import{Component, OnInit}from '@angular/core';
import {Hero} from './hero.model';

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  selectedHero:Hero;
  constructor() { }

  onSelect(hero:Hero){
    this.selectedHero = hero
    console.log(hero)
  }
  ngOnInit() {
    this.heroes = [
    {'id':1,'name':'A'},
    {'id':2,'name':'b'},
    {'id':3,'name':'c'},
    {'id':4,'name':'d'}
    ]
  }

}
