import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie';

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
  updateMovie(id: number, movieData: UpdateMovieDto): Movie[] {
    const targetIdx = this.movies.findIndex((movie) => movie.id === id);
    if (targetIdx > -1) {
      // this.movies[targetIdx] = { id: this.movies[targetIdx].id, ...movieData };
      return this.movies;
    }
  }
  createMovie(movieData: CreateMovieDto): Movie[] {
    this.movies.push({ id: this.movies.length + 1, ...movieData });
    return this.movies;
  }
}
