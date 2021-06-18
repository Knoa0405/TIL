### Console log 활용법

1. console.log()
- 기본적인 방법이다.

2. console.info / warn / error
- 정보, 경고, 에러 표시 ( 브라우저 콘솔에서 색이 다르게 표시됨)

3. console.assert()
- 특정한 조건에 부합하면 콘솔 출력

ex)
```javascript
console.assert(2 === 3, 'not same!'); // 조건 부합하지 않기때문에 출력
console.assert(2 === 2, 'same!'); // 조건 부합하므로 출력 X
```

4. console.table()
- 테이블 형태로 객체를 출력해준다.

5. console.dir()
- 옵션을 전달할 수 있다.
ex)
```javascript
    console.dir(noa, { colors: false, depth: 0});
    // 색상 / 깊이를 설정해줄 수 있다.
```

6. console.time() / console.timeEnd()
- 두 메서드 사이에 있는 구문 해석과 실행이 얼마동안 걸렸는지 시간을 출력
```javascript
    console.time('for loop');
    for(let i = 0; i < 10; i++) {
        console.log("hello");
    }
    console.timeEnd('for loop');
```

7. console.count("function") / 리셋 -> console.countReset("function")
- 함수 호출이 몇번째 호출되고 있는지 확인 가능

8. console.trace();
- 함수가 어디서 호출되었는지 확인 할 수 있다.
- 이벤트 리스너가 비동기 함수의 디버깅의 경우 유용하게 활용가능하다.