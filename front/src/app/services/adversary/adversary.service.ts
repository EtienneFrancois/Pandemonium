import { Injectable } from '@angular/core';
import { ICharacter } from 'src/app/interfaces/icharacter';
import { ISpell } from 'src/app/interfaces/ispell';
import { HttpClient } from '@angular/common/http';
import { IStats } from 'src/app/interfaces/istats';



@Injectable({
  providedIn: 'root'
})
export class AdversaryService {
  stats:IStats;
  character: ICharacter;
  healthPoint: number = 300;
  level: number;
  alive: boolean = true;
  spells: ISpell[] =[{name: "Frapper", description: "Attaque l'ennemie avec le poing" ,effect: "damage", formula: "this.heroService.stats.strength*8"},null,null,null];

  constructor(private http: HttpClient, ) { 
    this.init();
  }

  getMaxHp():number{
    return 300+(this.stats.health*10);
  }

  getHp(){
    return this.healthPoint;
  }

  getUrl():string{
    return this.character? this.character.url : "" ;
  }

  getName(): string{
    return this.character? this.character.name : "Loading" ;
  }

  takeDamage(value:number){
    this.healthPoint-=value;
    if(this.healthPoint<1){ this.alive=false;}
  }

  isAlive(){
    return this.alive;
  }

  init(){
    this.http.get<IStats>("https://localhost:5001/Stats/10").subscribe( (result) => {this.stats=result;}, (error) => {console.log(error);}, () => this.healthPoint=this.getMaxHp());
    this.http.get<ICharacter>("https://127.0.0.1:5011/Character/monster").subscribe( (result) => {this.character=result;}, (error) => {console.log(error);});
  }

}
