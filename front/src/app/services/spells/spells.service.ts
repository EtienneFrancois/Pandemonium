import { Injectable } from '@angular/core';
import { ISpell } from 'src/app/interfaces/ispell';
import { HeroService } from '../hero/hero.service';
import { BattleService } from '../battle/battle.service';
import { AdversaryService } from '../adversary/adversary.service';
import { ISpellResult } from 'src/app/interfaces/ispellresult';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {
  spells: ISpell[] =[null,null,null,null];
  monsterSpells: ISpell[] =[null,null,null,null];

  constructor(private heroService: HeroService, private adversaryService:AdversaryService) {}

  use(spell : ISpell):ISpellResult{
    let result = eval(spell.formula)
    if( spell.effect=="damage"){
      return {value: result, effect:"damage"};
    }
    return {value: result, effect:"heal"};
  }
}
