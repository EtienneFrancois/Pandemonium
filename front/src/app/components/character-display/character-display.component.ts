import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero/hero.service';

@Component({
  selector: 'app-character-display',
  templateUrl: './character-display.component.html',
  styleUrls: ['./character-display.component.css']
})
export class CharacterDisplayComponent implements OnInit {

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
