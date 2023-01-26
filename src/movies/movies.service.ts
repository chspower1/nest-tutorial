import { Injectable } from '@nestjs/common';
import { Movie } from './entities/movie.entity';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [
    {
      id: 1,
      title: 'hi',
      description: 'test',
      year: 1996,
      genres: ['action'],
    },
    {
      id: 2,
      title: 'asdasdsa',
      description: 'test',
      year: 2000,
      genres: ['action'],
    },
    {
      id: 3,
      title: 'ass',
      description: 'test',
      year: 3333,
      genres: ['action'],
    },
  ];

  getAll(): Movie[] {
    return this.movies;
  }

  getOne(id: number): Movie {
    return this.movies.find((movie) => movie.id === id);
  }

  createMovie(movie: Movie): boolean {
    if (movie) {
      this.movies.push(movie);
      return true;
    } else return false;
  }

  deleteOne(id: number): boolean {
    if (id) {
      this.movies = this.movies.filter((movie) => movie.id !== id);
      return true;
    } else return false;
  }

  searchMovie(keyword: string): Movie[] {
    if (keyword) {
      return this.movies.filter(
        (movie) =>
          movie.title.includes(keyword) || movie.description.includes(keyword),
      );
    }
  }
}
