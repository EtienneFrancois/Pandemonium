import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero/hero.service';
import {CHARACTERS} from '../../mock-characters';
import { ICharacter } from 'src/app/interfaces/icharacter';

@Component({
  selector: 'app-character-screen',
  templateUrl: './character-screen.component.html',
  styleUrls: ['./character-screen.component.css']
})
export class CharacterScreenComponent implements OnInit {
  characters = CHARACTERS;
  characterSelected: boolean = false;

  constructor(private heroService: HeroService) { }

  
  onSelect(character: ICharacter){
    this.heroService.character = character;
    this.characterSelected=true;
  }

  getUrl(): string{
    return this.heroService.character.url;
  }

  getName(): string{
    return this.heroService.name;
  }

  onKey(event: any) { 
    this.heroService.name = event.target.value;
  }

  characterIsNull(): boolean{
    return this.heroService.characterIsNull();
  }

  nameIsEmpty():boolean{
    return this.heroService.nameIsEmpty();
  }

  haveUnfilledField(): boolean{
    return this.heroService.haveUnfilledField();
  }

  ngOnInit(): void {
    if(this.heroService.character){
      this.characterSelected = true;
    }
  }

}
