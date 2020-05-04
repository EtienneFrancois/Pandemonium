import { Injectable } from '@angular/core';
import { Spell } from 'src/app/interfaces/spell';
import { SPELLS } from 'src/app/mock-spell';
import { HeroService } from '../hero/hero.service';
import { BattleService } from '../battle/battle.service';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {
  spells: Spell[] =[{name: "Frapper", description: "Attaque l'ennemie avec le poing" ,effect: "damage", formula: "this.heroService.stats.strength*8"},null,null,null];

  constructor(private heroService: HeroService, private battleService:BattleService) {}

  use(spell : Spell){
    if( spell.effect=="damage"){
      this.battleService.hit(eval(spell.formula));
    }else{
      console.log("Hero heal himself for",eval(spell.formula),"hp");
    }
  }
}
