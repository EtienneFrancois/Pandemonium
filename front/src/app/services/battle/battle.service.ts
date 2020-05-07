import { Injectable } from '@angular/core';
import { HeroService } from '../hero/hero.service';
import { AdversaryService } from '../adversary/adversary.service';

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  currentPlayer:boolean =true;

  constructor(private heroService:HeroService, private adversaryService:AdversaryService) { 
    this.adversaryNewCombat();
    this.heroNewCombat();
  }

  heroNewCombat(){
    this.heroService.healthPoint=this.heroService.getMaxHp();
  }

  adversaryNewCombat(){
    this.adversaryService.init();
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
          this.adversaryNewCombat();
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


  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }

}
