import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesSurvice: MoviesService) {}

  @Get()
  getAll() {
    return this.moviesSurvice.getAll();
  }

  @Get('search')
  search(@Query('keyword') keyword: string) {
    return this.moviesSurvice.searchMovie(keyword);
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.moviesSurvice.getOne(parseInt(id));
  }

  @Post()
  create(@Body() movie: Movie) {
    return this.moviesSurvice.createMovie(movie);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesSurvice.deleteOne(parseInt(id));
  }
}
