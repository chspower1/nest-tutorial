import { Test, TestingModule } from '@nestjs/testing';
import { Movie } from './entities/movie';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getMovies', () => {
    it('shold return an array', () => {
      expect(service.getMovies()).toBeInstanceOf(Array);
    });
  });
  describe('getMovie', () => {
    it('shold return an Movie Type', () => {
      service.createMovie({
        title: 'test',
        description: 'dd',
      });
      expect(service.getMovie(1)).toBeDefined();
    });

    it('should throw 404 error', () => {
      expect(service.deleteMovie(2)).toThrowError();
    });
  });
});
