import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero/hero.service';
import {CHARACTERS} from '../../mock-characters';
import { Character } from 'src/app/interfaces/character';

@Component({
  selector: 'app-character-screen',
  templateUrl: './character-screen.component.html',
  styleUrls: ['./character-screen.component.css']
})
export class CharacterScreenComponent implements OnInit {
  characters = CHARACTERS;
  characterSelected: boolean = false;

  constructor(private heroService: HeroService) { }

  
  onSelect(character: Character){
    this.heroService.character = character;
    this.characterSelected=true;
  }

  getUrl(): string{
    return this.heroService.character.url;
  }

  getName(): string{
    return this.heroService.name;
  }

  characterIsNull(): boolean{
    return this.heroService.character == null;
  }

  nameIsEmpty():boolean{
    return this.heroService.name == "";
  }

  ngOnInit(): void {
    if(this.heroService.character){
      this.characterSelected = true;
    }
  }

  onKey(event: any) { 
    this.heroService.name = event.target.value;
  }

  haveUnfilledField(): boolean{
    return this.characterIsNull() || this.nameIsEmpty();
  }

}
