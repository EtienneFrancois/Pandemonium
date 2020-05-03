import { Injectable } from '@angular/core';
import { Stats } from 'src/app/classes/stats';
import { Character } from 'src/app/interfaces/character';
import { ENEMIES } from 'src/app/mock-enemies';


@Injectable({
  providedIn: 'root'
})
export class AdversaryService {
  stats:Stats= new Stats();
  character: Character = ENEMIES[0];
  heathPoint: number = 300;
  level: number = 1;

  constructor() { 
    this.stats.changeStats();
  }

  getStats(): Stats{
    return this.stats;
  }

  getMaxHp():number{
    return 300+(this.stats.health*10);
  }

  getUrl():string{
    return this.character.url;
  }

  getName(): string{
    return this.character.name;
  }

}
