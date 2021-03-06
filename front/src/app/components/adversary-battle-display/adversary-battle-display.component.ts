import { Component, OnInit } from '@angular/core';
import { AdversaryService } from 'src/app/services/adversary/adversary.service';

@Component({
  selector: 'app-adversary-battle-display',
  templateUrl: './adversary-battle-display.component.html',
  styleUrls: ['./adversary-battle-display.component.css']
})
export class AdversaryBattleDisplayComponent implements OnInit {

  constructor(private adversary:AdversaryService) { }

  getHp():number{
    return this.adversary.getHp();
  }

  getLevel():number{
    return this.adversary.level;
  }

  getMaxHp():number{
    return this.adversary.stats?this.adversary.getMaxHp(): this.adversary.getHp();
  }

  getName():string{
    return this.adversary.getName();
  }

  getUrl():string{
    return this.adversary.getUrl();
  }

  getRatio():number{
    return Math.round(100/this.getMaxHp()*this.getHp());
  }

  ngOnInit(): void {
  }

}
