import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeScreenComponent } from './components/home-screen/home-screen.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { StatsScreenComponent } from './components/stats-screen/stats-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeScreenComponent,
    TopBarComponent,
    StatsScreenComponent,
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
