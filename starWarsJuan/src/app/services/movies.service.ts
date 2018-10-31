import { Injectable } from '@angular/core';
import { Movie } from '../modules/movies/model/movie';
import { MOVIES } from '../modules/movies/data/data-movies';

@Injectable()
export class MoviesService {

  constructor() { }

  getMovies(): Promise<Movie[]>{
    return Promise.resolve(MOVIES);
  }

}
