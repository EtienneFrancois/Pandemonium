import { Injectable } from '@angular/core';
import { ISpell } from 'src/app/interfaces/ispell';
import { HeroService } from '../hero/hero.service';
import { BattleService } from '../battle/battle.service';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {
  spells: ISpell[] =[null,null,null,null];

  constructor(private heroService: HeroService, private battleService:BattleService) {}

  use(spell : ISpell){
    if( spell.effect=="damage"){
      this.battleService.hit(eval(spell.formula));
    }else{
      console.log("Hero heal himself for",eval(spell.formula),"hp");
    }
  }
}
