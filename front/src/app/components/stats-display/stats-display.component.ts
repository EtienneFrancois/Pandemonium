import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero/hero.service';
import { Stats } from 'src/app/classes/stats';
import { IStats } from 'src/app/interfaces/istats';
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-stats-display',
  templateUrl: './stats-display.component.html',
  styleUrls: ['./stats-display.component.css']
})
export class StatsDisplayComponent implements OnInit {

  constructor(private heroService: HeroService) {   }

  getHealth(){
    return this.heroService.stats ? this.heroService.stats.health : 0;
  }

  getStrength(){
    return this.heroService.stats ? this.heroService.stats.strength : 0;
  }

  getWisdom(){
    return this.heroService.stats ? this.heroService.stats.wisdom : 0;
  }

  getDexterity(){
    return this.heroService.stats ? this.heroService.stats.dexterity : 0;
  }

  getLuck(){
    return this.heroService.stats ? this.heroService.stats.luck : 0;
  }

  ngOnInit(): void {
    //this.stats=this.heroService.getStatsOberser();
  }

}
