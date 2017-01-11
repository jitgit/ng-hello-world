import{Component,OnInit,Input}from '@angular/core';
import {Hero} from './hero.model'

@Component({
  selector : 'hero',
  template : `
    <div *ngIf="hero">
      We selected <input [(ngModel)]="hero.name"/>
    </div>
  `
})

export class HeroComponent implements OnInit {

  @Input() hero:Hero;
  construtor(){
  }

  ngOnInit() {
    console.log("ngOnInit Hero")
  }
}
