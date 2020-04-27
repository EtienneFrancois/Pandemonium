import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero/hero.service';


@Component({
  selector: 'app-stats-screen',
  templateUrl: './stats-screen.component.html',
  styleUrls: ['./stats-screen.component.css']
})
export class StatsScreenComponent implements OnInit {

  constructor(public heroService: HeroService) { }

  changeStats(): void {
    this.heroService.changeStats();
  }

  ngOnInit(): void {

  }

}
