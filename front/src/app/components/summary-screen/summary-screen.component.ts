import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-summary-screen',
  templateUrl: './summary-screen.component.html',
  styleUrls: ['./summary-screen.component.css']
})
export class SummaryScreenComponent implements OnInit {

  constructor(private heroService:HeroService) { }

  haveUnfilledField():boolean{
    return this.heroService.haveUnfilledField();
  }

  ngOnInit(): void {
  }

}
