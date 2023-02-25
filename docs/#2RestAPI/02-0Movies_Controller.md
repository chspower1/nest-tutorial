# Movies Controller

## query parameter

query parameter를 인자로 받는 법

- 인자가 필요하면 요청을 해야함
- Param 데코레이터를 사용함

### 요청하는 방법

    ```ts
    @Get('/:id')
    getMovie(@Param('id') id: string) {
        return `movie ${id}`;
    }
    ```

## Put과 Patch의 차이점
Put은 모든 리소스를 업데이트하고 Patch는 리소스의 일부만 업데이트함.