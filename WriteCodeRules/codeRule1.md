
### 코드 작성법 - 2020.9.20

1. 불변성을 유지하자.

2. 핸들러 함수 내에서는 함수의 이름처럼 일어나는 일을 단순하게 표현할 수 있어야 한다.

3. 컬렉션 이름을 지을 때는 자료구조에 종속되지않도록 지어야한다.

4. 함수 내부에서 일어나는 일을 함수 이름 하나로 최대한 설명가능해야한다. 즉 대표성을 가져야 한다.

5. side effect 가 발생하고 있고 매번 새로운 배열 (사본)을 만들면 side effect를 방지 할 수 있다.

6. push 또한 원본 배열에 변경을 가하는 요소이다.

7. spread syntax를 사용하면 push는 더이상 쓰지 않아도 된다.

8. eslint 사용 규칙을 지키자 코딩 컨벤션에 어긋나거나 안티 패턴을 자동 검출해주고 포맷까지 해준다.
9. 인라인 variable ? [https://refactoring.com/catalog/inlineVariable.html](https://refactoring.com/catalog/inlineVariable.html)