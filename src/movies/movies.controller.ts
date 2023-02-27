import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
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
  getMovie(@Param('id') id: number, @Req() res) {
    console.log(res);
    console.log(typeof id);
    return this.moviesService.getMovie(id);
  }

  @Delete(':id')
  deleteMovie(@Param('id') id: number): Movie[] {
    return this.moviesService.deleteMovie(id);
  }

  @Patch(':id')
  updateMovie(
    @Param('id') id: number,
    @Body() movieData: UpdateMovieDto,
  ): Movie[] {
    return this.moviesService.updateMovie(id, movieData);
  }

  @Post()
  createMovie(@Body() movieData: CreateMovieDto): Movie[] {
    return this.moviesService.createMovie(movieData);
  }
}
