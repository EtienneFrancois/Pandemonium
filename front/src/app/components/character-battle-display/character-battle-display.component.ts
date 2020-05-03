import { Component, OnInit, ɵConsole } from '@angular/core';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-character-battle-display',
  templateUrl: './character-battle-display.component.html',
  styleUrls: ['./character-battle-display.component.css']
})
export class CharacterBattleDisplayComponent implements OnInit {

  constructor(private heroService:HeroService) { }

  getHp():number{
    return this.heroService.healthPoint;
  }

  getMaxHp():number{
    return this.heroService.getMaxHp();
  }

  getRatio():number{
    console.log("Ratio", Math.round(100/this.getMaxHp()*this.getHp()));
    return Math.round(100/this.getMaxHp()*this.getHp());
  }


  ngOnInit(): void {
  }

}
