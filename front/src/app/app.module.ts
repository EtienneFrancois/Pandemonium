import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { StatsScreenComponent } from './components/stats-screen/stats-screen.component';
import { CharacterScreenComponent } from './components/character-screen/character-screen.component';
import { SummaryScreenComponent } from './components/summary-screen/summary-screen.component';
import { StatsDisplayComponent } from './components/stats-display/stats-display.component';
import { CaracterDisplayComponent } from './components/caracter-display/caracter-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    TopBarComponent,
    StatsScreenComponent,
    CharacterScreenComponent,
    SummaryScreenComponent,
    StatsDisplayComponent,
    CaracterDisplayComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
