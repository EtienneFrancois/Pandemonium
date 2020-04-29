import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero/hero.service';


@Component({
  selector: 'app-stats-screen',
  templateUrl: './stats-screen.component.html',
  styleUrls: ['./stats-screen.component.css']
})
export class StatsScreenComponent implements OnInit {

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
    this.heroService.statsGenerated = true;
  }

  ngOnInit(): void {
    if(!this.heroService.statsGenerated){
      this.changeStats();
    }
  }

}
