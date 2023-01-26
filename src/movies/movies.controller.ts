import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'all movies';
  }

  @Get()
  search(@Query('yaer') searchYear: string) {
    return 'dd';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `${id}`;
  }

  @Post()
  create() {
    return 'create a movie';
  }

  @Delete('/:id')
  remove() {
    return 'delete a movie';
  }
}
