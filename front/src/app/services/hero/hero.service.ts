import { Injectable } from '@angular/core';
import { Character } from 'src/app/interfaces/character';
import { Spell } from 'src/app/interfaces/spell';
import { Stats } from 'src/app/classes/stats'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  stats: Stats = new Stats;
  statsGenerated: boolean = false;
  character: Character = null;
  name: string ="";
  level: number =1;
  healthPoint: number =300;
  
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
    this.stats.changeStats();
    this.statsGenerated = true;
    this.healthPoint=this.getMaxHp();
  }

  getMaxHp():number{
    return 300+(this.stats.health*10);
  }

  getStats(): Stats{
    return this.stats;
  }

  constructor() { }
}
