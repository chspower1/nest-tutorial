import { Controller, Get, Param } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'all movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `${id}`;
  }
}
