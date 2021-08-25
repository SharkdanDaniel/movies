import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    ListMoviesComponent,
    DetailMovieComponent
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    NgbModalModule
  ]
})
export class MoviesModule { }
