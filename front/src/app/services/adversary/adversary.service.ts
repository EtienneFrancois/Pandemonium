import { Injectable } from '@angular/core';
import { Stats } from 'src/app/classes/stats';
import { ICharacter } from 'src/app/interfaces/icharacter';
import { ISpell } from 'src/app/interfaces/ispell';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class AdversaryService {
  stats:Stats = new Stats();
  character: ICharacter;
  heathPoint: number ;
  level: number;
  alive: boolean = true;
  spells: ISpell[] =[{name: "Frapper", description: "Attaque l'ennemie avec le poing" ,effect: "damage", formula: "this.heroService.stats.getStrength()*8"},null,null,null];

  constructor(private http: HttpClient) { 
    this.init();
  }

  getStats(): Stats{
    return this.stats;
  }

  getMaxHp():number{
    return 300+(this.stats.getHealth()*10);
  }

  getHp(){
    return this.heathPoint;
  }

  getUrl():string{
    return this.character? this.character.url : "" ;
  }

  getName(): string{
    return this.character? this.character.name : "Loading" ;
  }

  takeDamage(value:number){
    this.heathPoint-=value;
    if(this.heathPoint<1){ this.alive=false;}
  }

  isAlive(){
    return this.alive;
  }

  init(){
    this.stats.changeStats();
    this.http.get<ICharacter>("https://127.0.0.1:5011/Character/monster").subscribe(character => this.character=character);
    this.heathPoint=this.getMaxHp();
  }

}
