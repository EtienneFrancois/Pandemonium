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

  getSelectedCharacter(): boolean{
    if(this.heroService.character == null){
      return false;
    }
    return true;
  }

  ngOnInit(): void {
    if(this.heroService.character){
      this.characterSelected = true;
    }
  }

}
