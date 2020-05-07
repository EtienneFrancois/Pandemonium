import { Injectable } from '@angular/core';
import { HeroService } from '../hero/hero.service';
import { AdversaryService } from '../adversary/adversary.service';
import { SpellsService } from '../spells/spells.service';
import { ISpellResult } from 'src/app/interfaces/ispellresult';
import { HttpClient } from '@angular/common/http';
import { ISpell } from 'src/app/interfaces/ispell';

@Injectable({
  providedIn: 'root'
})
export class BattleService {
  currentPlayer:boolean =true;

  constructor(private heroService:HeroService, private adversaryService:AdversaryService, private spellsService:SpellsService, private http:HttpClient) { 
    this.adversaryNewCombat();
    this.heroNewCombat();
  }

  heroNewCombat(){
    this.heroService.healthPoint=this.heroService.getMaxHp();
  }

  adversaryNewCombat(){
    this.adversaryService.init();
    this.http.get<ISpell>("https://127.0.0.1:5021/Spell/monster/"+this.adversaryService.character.baseSpellId).subscribe(spell => this.spellsService.monsterSpells[0]=spell);
  }

  heroAction(effect:ISpellResult){
      if(this.currentPlayer){
        this.changePlayer();
        this.adversaryService.takeDamage(effect.value);
        console.log("Hero deal ",effect.value," damages(s) to ennemy");
        setTimeout(() => {
          if(this.adversaryService.isAlive()){
            this.adversaryPlay();
          }else{
            console.log("Win! Next adversary incoming!");
            this.adversaryNewCombat();
          }
        }, 1000);
    }
  }

  adversaryPlay(){
    this.adversaryAction(this.spellsService.use(this.spellsService.monsterSpells[0]));
  }

  adversaryAction(effect:ISpellResult){
    this.heroService.takeDamage(effect.value);
    console.log("Adversary deal ", this.spellsService.use(this.spellsService.monsterSpells[0])," damages(s) to ennemy");
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
