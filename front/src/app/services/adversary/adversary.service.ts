import { Injectable } from '@angular/core';
import { Stats } from 'src/app/classes/stats';
import { Character } from 'src/app/interfaces/character';
import { Spell } from 'src/app/interfaces/spell';



@Injectable({
  providedIn: 'root'
})
export class AdversaryService {
  stats:Stats;
  character: Character;
  heathPoint: number ;
  level: number;
  alive: boolean;
  spells: Spell[] =[{name: "Frapper", description: "Attaque l'ennemie avec le poing" ,effect: "damage", formula: "this.heroService.stats.strength*8"},null,null,null];

  constructor() { }

  getStats(): Stats{
    return this.stats;
  }

  getMaxHp():number{
    return 300+(this.stats.health*10);
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
