import { Injectable } from '@angular/core';
import { Stats } from 'src/app/classes/stats';
import { ICharacter } from 'src/app/interfaces/icharacter';
import { ISpell } from 'src/app/interfaces/ispell';



@Injectable({
  providedIn: 'root'
})
export class AdversaryService {
  stats:Stats;
  character: ICharacter;
  heathPoint: number ;
  level: number;
  alive: boolean;
  spells: ISpell[] =[{name: "Frapper", description: "Attaque l'ennemie avec le poing" ,effect: "damage", formula: "this.heroService.stats.getStrength()*8"},null,null,null];

  constructor() { }

  getStats(): Stats{
    return this.stats;
  }

  getMaxHp():number{
    return 300+(this.stats.getHealth()*10);
  }

  getUrl():string{
    return this.character.url;
  }

  getName(): string{
    return this.character.name;
  }

  takeDamage(value:number){
    this.heathPoint-=value;
    if(this.heathPoint<1){ this.alive=false;}
  }

  isAlive(){
    return this.alive;
  }

}
