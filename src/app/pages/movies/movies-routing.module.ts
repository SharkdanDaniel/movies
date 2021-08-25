import { DetailMovieComponent } from './detail-movie/detail-movie.component';
import { ListMoviesComponent } from './list-movies/list-movies.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  { 
    path: 'movies', component: ListMoviesComponent
  },
  { 
    path: 'movie/:id', component: DetailMovieComponent
  },
  { 
    path: '**', redirectTo: 'movies' 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
