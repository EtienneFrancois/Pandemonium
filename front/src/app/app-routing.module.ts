import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { StatsScreenComponent } from './components/stats-screen/stats-screen.component';
import { CharacterScreenComponent } from './components/character-screen/character-screen.component';

const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component:  HomeScreenComponent},
  { path: 'stats', component: StatsScreenComponent},
  { path: 'character', component: CharacterScreenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
