import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { StatsScreenComponent } from './components/stats-screen/stats-screen.component';
import { CharacterScreenComponent } from './components/character-screen/character-screen.component';
import { SummaryScreenComponent } from './components/summary-screen/summary-screen.component';
import { BattleScreenComponent } from './components/battle-screen/battle-screen.component';

const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component:  HomeScreenComponent},
  { path: 'stats', component: StatsScreenComponent},
  { path: 'character', component: CharacterScreenComponent},
  { path: 'summary', component: SummaryScreenComponent},
  { path: 'battle', component: BattleScreenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
