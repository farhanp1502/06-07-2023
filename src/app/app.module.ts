import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActorsComponent } from './actors/actors.component';
import { MoviesComponent } from './movies/movies.component';
import {Demo2Service} from "./movies/demo2.service";
@NgModule({
  declarations: [
    AppComponent,
    ActorsComponent,
    MoviesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [Demo2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
