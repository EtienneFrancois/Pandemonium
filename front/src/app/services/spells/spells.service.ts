import { Injectable } from '@angular/core';
import { Spell } from 'src/app/interfaces/spell';
import { SPELLS } from 'src/app/mock-spell';
import { HeroService } from '../hero/hero.service';

@Injectable({
  providedIn: 'root'
})
export class SpellsService {
  spells: Spell[] =[{name: "Frapper", description: "Attaque l'ennemie avec le poing" ,effect: "damage", formula: "this.heroService.strength*8"},null,null,null];

  constructor(private heroService: HeroService) {}

  use(spell : Spell){
    if( spell.effect=="damage"){
      console.log("Hero deal ",eval(spell.formula)," damages(s) to ennemy");
    }else{
      console.log("Hero heal himself for",eval(spell.formula),"hp");
    }
  }
}
