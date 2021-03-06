import { Component, OnInit } from '@angular/core';
import { HeroService } from 'src/app/services/hero/hero.service';
import { ICharacter } from 'src/app/interfaces/icharacter';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { SpellsService } from 'src/app/services/spells/spells.service';
import { ISpell } from 'src/app/interfaces/ispell';

@Component({
  selector: 'app-character-screen',
  templateUrl: './character-screen.component.html',
  styleUrls: ['./character-screen.component.css']
})

export class CharacterScreenComponent implements OnInit { 
  characterSelected: boolean = false;
  heroes: ICharacter[];
  constructor(private heroService: HeroService, private http: HttpClient, private spellsService:SpellsService) {
    this.getHeroList();
   }

  
  onSelect(character: ICharacter){
    this.heroService.character = character;
    this.characterSelected=true;
    this.http.get<ISpell>("https://127.0.0.1:5021/Spell/hero/"+this.heroService.character.baseSpellId).subscribe(spell => this.spellsService.spells[0]=spell);
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

  getHeroList():void {
    this.http.get<ICharacter[]>("https://127.0.0.1:5011/Character").subscribe(heroes => this.heroes=heroes);
  }
}
