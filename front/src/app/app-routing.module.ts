import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { StatsScreenComponent } from './components/stats-screen/stats-screen.component';

const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component:  HomeScreenComponent},
  { path: 'starting', component: StatsScreenComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
