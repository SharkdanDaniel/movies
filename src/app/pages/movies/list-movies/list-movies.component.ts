import { DetailMovieComponent } from './../detail-movie/detail-movie.component';
import { Movie } from './../models/movie.model';
import { MovieService } from './../movie.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, finalize, map } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss']
})
export class ListMoviesComponent implements OnInit {
  movies$ = new Observable<Movie[]>();
  years = [
    { type: 'ano', value: 2017, displayName: 2017 },
    { type: 'ano', value: 2018, displayName: 2018 },
    { type: 'ano', value: 2019, displayName: 2019 },
  ];
  genders = [
    { type: 'genero', value: 'Fantasy/Sci-fi', displayName: 'Fantasia / Ficção Científica' },
    { type: 'genero', value: 'Sci-fi/Action', displayName: 'Ficção Científica / Acão' },
  ]

  selectedYear = 'all';
  selectedGender = 'all';

  constructor(
    private movieService: MovieService, 
    private loading: NgxSpinnerService, 
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.loading.show();
    this.movies$ = this.movieService.getMovie().pipe(
      map((movies: Movie[]) => {
        if (this.selectedYear != 'all') movies = movies.filter((movie) => movie.ano == this.selectedYear);
        if (this.selectedGender != 'all') movies = movies.filter((movie) => movie.genero == this.selectedGender);
        return movies;
      }), finalize(() => {
        setTimeout(() => {
          this.loading.hide();
        }, 200);
      }))
  }

  filterByYear(year: string) {
    this.selectedYear = year;
    this.loadMovies()
  }

  filterByGender(gender: string) {
    this.selectedGender = gender;
    this.loadMovies()
  }

  openModal(movie: Movie) {
    const modalRef = this.modalService.open(DetailMovieComponent, { size: 'xl' });
    modalRef.componentInstance.movie = movie;
  }
}
