# More Routes

## Decorator

- Body

  ```ts
  @Get()
  getOne(@Body() data){
      return data;
  }
  ```

- Query

  ```ts
  @Get('search')
  search(@Query("year") searchingYear:string){
      return searchingYear;
  }
  ```

## Get의 순서

query parameter가 위에 있을 경우 모든 get 요청이 query parameter로 인식함.
그래서, query parameter인 경우 맨 밑에 배치
