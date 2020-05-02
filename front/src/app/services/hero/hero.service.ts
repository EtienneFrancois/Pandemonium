import { Injectable } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { Spell } from 'src/app/interfaces/spell';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  health: number = 0;
  wisdom: number = 0;
  strength: number = 0;
  dexterity: number = 0;
  luck: number = 0;
  statsGenerated: boolean = false;
  character: Character = null;
  name: string ="";
  
  characterIsNull(): boolean{
    return this.character == null;
  }

  nameIsEmpty():boolean{
    return this.name == "";
  }

  haveUnfilledField(): boolean{
    return this.characterIsNull() || this.nameIsEmpty();
  }

  changeStats(){ // MOOC : API CALL LATER
    let total= 100;
    let index;
    let quantity;
    this.health = 1;
    this.wisdom = 1;
    this.strength = 1;
    this.dexterity = 1;
    this.luck = 1;
    while(total > 0){
      index = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
      quantity =  Math.floor(Math.random() * (total - 0 + 1)) + 0;
      switch (index) {
        case 0 :
          this.health+=quantity;
        break
        case 1 :
          this.wisdom+=quantity;
        break
        case 2 :
          this.strength+=quantity;
        break
        case 3 :
          this.dexterity+=quantity;
        break
        case 4 :
          this.luck+=quantity;
        break
        default:
          console.log('Out of index ' + index + '.');
      }
      total -= quantity;
    }
  }





  constructor() { }
}
