import { Injectable } from '@angular/core';
import { ICharacter } from 'src/app/interfaces/icharacter';
import { ISpell } from 'src/app/interfaces/ispell';
import { Stats } from 'src/app/classes/stats'

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  stats: Stats = new Stats;
  statsGenerated: boolean = false;
  character: ICharacter = null;
  name: string ="";
  level: number =1;
  healthPoint: number =300;
  alive:boolean = true;
  
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
    return 300+(this.stats.getHealth()*10);
  }

  getHp():number{
    return this.healthPoint;
  }

  getStats(): Stats{
    return this.stats;
  }

  isAlive():boolean{
    return this.alive;
  }

  takeDamage(value:number){
    this.healthPoint-=value;
    if(this.healthPoint<1){ this.alive=false}
  }


  constructor() { }
}
