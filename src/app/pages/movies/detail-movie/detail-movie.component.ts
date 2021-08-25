import { Movie } from './../models/movie.model';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit {
  @Input() movie: Movie = {
    ano: '',
    descricao: '',
    diretor: '',
    genero: '',
    nome: '',
    poster: ''
  };

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
