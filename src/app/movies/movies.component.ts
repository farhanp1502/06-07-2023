import { Component } from '@angular/core';
import {Demo2Service } from './demo2.service'
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
constructor(public movieser:Demo2Service){
  movieser;
}
}
