import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-stats-display',
  templateUrl: './stats-display.component.html',
  styleUrls: ['./stats-display.component.css']
})
export class StatsDisplayComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
