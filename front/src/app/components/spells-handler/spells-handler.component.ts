import { Component, OnInit } from '@angular/core';
import { SpellsService } from 'src/app/services/spells/spells.service';

@Component({
  selector: 'app-spells-handler',
  templateUrl: './spells-handler.component.html',
  styleUrls: ['./spells-handler.component.css']
})
export class SpellsHandlerComponent implements OnInit {

  constructor(private spellsService:SpellsService) { }

  getName(spellNumber: number): string{
    return this.spellsService.spells[spellNumber].name;
  }

  getDescription(spellNumber: number): string{
    return this.spellsService.spells[spellNumber].description
  }

  use(spellNumber: number): void{
    this.spellsService.use(this.spellsService.spells[spellNumber]);
  }

  isEmpty(spellNumber: number){
    return this.spellsService.spells[spellNumber] == null;
  }

  ngOnInit(): void {
  }

}
