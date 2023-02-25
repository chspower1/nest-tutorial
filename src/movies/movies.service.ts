import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie, MovieData } from './entities/movie';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];
  getMovies(): Movie[] {
    return this.movies;
  }
  getMovie(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === id);
    if (!movie) {
      throw new NotFoundException(`Movie with ID ${id} Not Found`);
    }
    return movie;
  }

  deleteMovie(id: number): Movie[] {
    return this.movies.filter((movie) => movie.id !== id);
  }

  createMovie(movieData: MovieData): Movie[] {
    this.movies.push({ id: this.movies.length + 1, ...movieData });
    return this.movies;
  }
}
