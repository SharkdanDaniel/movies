import { Movie } from './models/movie.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {  
  constructor(private http: HttpClient) { }

  getMovie() {
    return this.http.get<Movie[]>('./assets/FILMES.JSON').pipe(take(1));
  }
}
