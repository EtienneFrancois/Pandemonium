import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-caracter-display',
  templateUrl: './caracter-display.component.html',
  styleUrls: ['./caracter-display.component.css']
})
export class CaracterDisplayComponent implements OnInit {

  constructor(private heroService:HeroService) { }

  getUrl(): string{
    return this.heroService.character.url;
  }

  getName(): string{
    return this.heroService.name;
  }

  characterIsNull(): boolean{
    return this.heroService.characterIsNull();
  }

  ngOnInit(): void {
  }

}
