import { Injectable } from '@angular/core';
import { ISpell } from 'src/app/interfaces/ispell';
import { SPELLS } from 'src/app/mock-spell';
import { HeroService } from '../hero/hero.service';
import { BattleService } from '../battle/battle.service';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {
  spells: ISpell[] =[{name: "Frapper", description: "Attaque l'ennemie avec le poing" ,effect: "damage", formula: "this.heroService.stats.getStrength()*8"},null,null,null];

  constructor(private heroService: HeroService, private battleService:BattleService) {}

  use(spell : ISpell){
    if( spell.effect=="damage"){
      this.battleService.hit(eval(spell.formula));
    }else{
      console.log("Hero heal himself for",eval(spell.formula),"hp");
    }
  }
}
