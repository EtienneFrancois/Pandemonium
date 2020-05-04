import { Injectable } from '@angular/core';
import { HeroService } from '../hero/hero.service';
import { AdversaryService } from '../adversary/adversary.service';
import { Character } from 'src/app/interfaces/character';
import { Stats } from 'src/app/classes/stats';
import { ENEMIES } from 'src/app/mock-enemies';

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  currentPlayer:boolean =true;

  constructor(private heroService:HeroService, private adversaryService:AdversaryService) { 
    let stats= new Stats();
    stats.changeStats();
    this.setAdversary(stats, ENEMIES[0], 1);
  }

  hit(value:number){
    if(this.currentPlayer){
      this.changePlayer();
      this.adversaryService.takeDamage(value);
      console.log("Hero deal ",value," damages(s) to ennemy");
      setTimeout(() => {
        if(this.adversaryService.isAlive()){
          this.adversaryAction();
        }else{
          console.log("Win! Next adversary incoming!");
          let stats= new Stats();
          stats.changeStats();
          this.setAdversary(stats, ENEMIES[0], 1);
        }
      }, 1000);
    }
  }

  adversaryAction(){
    this.heroService.takeDamage(eval(this.adversaryService.spells[0].formula));
    console.log("Adversary deal ", eval(this.adversaryService.spells[0].formula)," damages(s) to ennemy");
    setTimeout(() => {
      this.changePlayer();
    }, 1000);
  }

  changePlayer(){
    this.currentPlayer=!this.currentPlayer; 
  }

  setAdversary(stats:Stats, character: Character, level: number){
    this.adversaryService.stats=stats;
    this.adversaryService.character=character;
    this.adversaryService.level=level;
    this.adversaryService.heathPoint=this.adversaryService.getMaxHp();
    this.adversaryService.alive=true;
  }

  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
