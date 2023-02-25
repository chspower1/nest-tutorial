import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Movie } from './entities/movie';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}
  @Get()
  getMovies() {
    return this.moviesService.getMovies();
  }

  @Get('/:id')
  getMovie(@Param('id') id: number) {
    console.log(typeof id);
    return this.moviesService.getMovie(id);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: number): Movie[] {
    return this.moviesService.deleteMovie(id);
  }

  @Post()
  createMovie(@Body() movieData): Movie[] {
    return this.moviesService.createMovie(movieData);
  }
}
