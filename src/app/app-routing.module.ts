import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsComponent } from './actors/actors.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  // wrong way of redirecting it doesn't change te url
  // {path: "" , component: ActorsComponent},
  // to redirect the path we use this  it also change te url
  {path:"", redirectTo:"actors", pathMatch:"full"},   
  {path: "actors" , component: ActorsComponent},
  {path: "movies" , component: MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
