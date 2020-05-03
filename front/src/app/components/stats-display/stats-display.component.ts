import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero/hero.service';
import { Stats } from 'src/app/classes/stats';

@Component({
  selector: 'app-stats-display',
  templateUrl: './stats-display.component.html',
  styleUrls: ['./stats-display.component.css']
})
export class StatsDisplayComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  stats:Stats = this.heroService.getStats();

  getHealth(): number{
    return this.stats.health;
  }

  getWisdom(): number{
    return this.stats.wisdom;
  }
  
  getStrength(): number{
    return this.stats.strength;
  }

  getDexterity(): number{
    return this.stats.dexterity;
  }

  getLuck(): number{
    return this.stats.luck;
  }

  ngOnInit(): void {
  }

}
