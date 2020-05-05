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
    return this.stats.getHealth();
  }

  getWisdom(): number{
    return this.stats.getWisdom();
  }
  
  getStrength(): number{
    return this.stats.getStrength();
  }

  getDexterity(): number{
    return this.stats.getDexterity();
  }

  getLuck(): number{
    return this.stats.getLuck();
  }

  ngOnInit(): void {
  }

}
