## Typescript ?
- superset of javascript!
- 모든 함수의 인풋 아웃풋 props 타입을 정의하기 때문에 디버깅이 편하다!
1. interface 와 type 정의
    - 인터페이스의 경우 클래스, 즉 객체 지향 프로그래밍을 적극적으로 구현할 수 있다.
2. 정적 타입이란?
 - 컴파일시에 에러 체크가 가능하다.
3. 타입스크립트 작동 원리 ( 컴파일러 )
4. 바벨 없는 ES6 지원 ( 컴파일시에 트랜스파일도 같이 해줌 )
5. tsconfig.json 설정하기
6. 디버깅 잘하는법
 - 컴파일시 문법, 타입 에러 확인이 가능하다.


### 타입스크립트 활용

```javascript
    type reduceProps = {
        [key: string] : string;
    }

    const images = tags.reduce<reduceProps>((acc, tag): reduceProps => {
        return { ...acc, [tag]: `@assets/tagIcons/${tag}.png` };
    }, {});
```