import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  health: number = 0;
  wisdom: number = 0;
  strength: number = 0;
  dexterity: number = 0;
  luck: number = 0;


  changeStats(){
    this.health = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    this.wisdom = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    this.strength = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    this.dexterity = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
    this.luck = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
  }

  constructor() { }
}
