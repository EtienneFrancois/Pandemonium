import { Injectable } from '@angular/core';
import { ICharacter } from 'src/app/interfaces/icharacter';
import { IStats } from 'src/app/interfaces/istats';
import { StatsService } from '../stats/stats.service'
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  stats: IStats;
  statsObserver:Observable<IStats>;
  statsGenerated: boolean = false;
  character: ICharacter;
  name: string ="";
  level: number =1;
  healthPoint: number;
  alive:boolean = true;

  constructor(private statsService:StatsService) { }
  
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
    this.stats=this.statsService.generateNewHeroStats();
    this.statsGenerated=true;
  }

  getStatsOberser():Observable<IStats>{
    return this.statsObserver;
  }

  getMaxHp():number{
    return 300+(this.stats.health*10);
  }

  getHp():number{
    return this.healthPoint;
  }

  getStats(): IStats{
    return this.stats;
  }

  isAlive():boolean{
    return this.alive;
  }

  takeDamage(value:number){
    this.healthPoint-=value;
    if(this.healthPoint<1){ this.alive=false}
  }

}
