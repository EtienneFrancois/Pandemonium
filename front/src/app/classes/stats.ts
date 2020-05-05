import { HttpClient } from '@angular/common/http';
import { IStats } from '../interfaces/istats';

export class Stats{
    stats:IStats = {health: 0, strength : 0, wisdom : 0, dexterity : 0, luck: 0};

    getHealth(){
      return this.stats.health;
    }

    setHealth(value:number){
      this.stats.health=value;
    }

    getWisdom(){
      return this.stats.wisdom;
    }

    setWisdom(value:number){
      this.stats.wisdom=value;
    }


    getStrength(){
      return this.stats.strength;
    }

    setStrength(value:number){
      this.stats.strength=value;
    }


    getDexterity(){
      return this.stats.dexterity;
    }

    setDexterity(value:number){
      this.stats.dexterity=value;
    }


    getLuck(){
      return this.stats.luck;
    }

    setLuck(value:number){
      this.stats.luck=value;
    }


    constructor() {}

    getSum(){
      return this.getHealth() + this.getWisdom() + this.getStrength() + this.getDexterity() + this.getLuck();
    }

    changeStats(){
      var request = new XMLHttpRequest();
      request.open('GET', 'https://localhost:5001/Stats/10')
      request.send();
      request.onload = () => {
        if(request.status==200){
           this.stats=JSON.parse(eval(request.response));
        }else{
          console.log("error ${request.status} ${request.statusText}")
        }
      }
    }


}