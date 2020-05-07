import { Injectable } from '@angular/core';
import { IStats } from 'src/app/interfaces/istats';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatsService {
  heroStats:IStats;
  adversaryStats:IStats;

  constructor(private http:HttpClient) { }

  generateNewHeroStats():IStats{
    this.http.get<IStats>("https://localhost:5001/Stats/10").subscribe(value=>{this.heroStats=value});
    console.log(this.heroStats);
    return this.heroStats;
  }

  generateNewMonsterStats():IStats{
    this.http.get<IStats>("https://localhost:5001/Stats/10").subscribe(value=>{this.heroStats=value});
    console.log(this.heroStats);
    return this.heroStats;
  }


}
