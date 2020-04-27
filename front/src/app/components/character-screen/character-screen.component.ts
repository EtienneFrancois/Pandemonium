import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-character-screen',
  templateUrl: './character-screen.component.html',
  styleUrls: ['./character-screen.component.css']
})
export class CharacterScreenComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  getHealth(): number{
    return this.heroService.health;
  }

  getWisdom(): number{
    return this.heroService.wisdom;
  }
  
  getStrength(): number{
    return this.heroService.strength;
  }

  getDexterity(): number{
    return this.heroService.dexterity;
  }

  getLuck(): number{
    return this.heroService.luck;
  }

  changeStats(): void {
    this.heroService.changeStats();
  }

  ngOnInit(): void {
  }

}
