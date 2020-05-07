import { Injectable } from '@angular/core';
import { ICharacter } from 'src/app/interfaces/icharacter';
import { IStats } from 'src/app/interfaces/istats';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  stats: IStats;
  statsGenerated: boolean = false;
  character: ICharacter;
  name: string ="";
  level: number =1;
  healthPoint: number;
  alive:boolean = true;

  constructor(private http:HttpClient) { }
  
  characterIsNull(): boolean{
    return this.character == null;
  }

  nameIsEmpty():boolean{
    return this.name == "";
  }

  haveUnfilledField(): boolean{
    return this.characterIsNull() || this.nameIsEmpty();
  }

  changeStats():void{
    this.http.get<IStats>("https://localhost:5001/Stats/10").subscribe(value=>{this.stats=value, (error) => {console.log(error);}, () => this.healthPoint=this.getMaxHp();  this.statsGenerated=true;});
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
