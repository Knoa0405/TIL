# IIFE (즉시 실행 함수?)

MDN문서 에 보면 함수표현식만이 즉시실행 가능하다고 적혀있다. 선언과 동시에 즉시 실행이 가능하게 하려면, 선언을 표현식으로 바꿔야한다.

아래는 선언을 표현식으로 바꾸는 방법은 소괄호로 감싸는 방법이다.

```javascript
foo = function () {
  console.log("foo");
}; // 함수선언을 함수 표현식으로 표현
foo(); // "foo"
```

## 잠깐! 함수 선언 과 표현의 차이는?

### 함수 선언은...

```javascript
function name(parameter) {
  statements;
}
```

name : 함수이름
parameter : 함수의 인자이며 255개까지 인자를 가질 수 있습니다
statements : 함수의 본문을 기술합니다
함수의 선언은 이름을 가지며 선언시 자동으로 호이스팅(hoisting) 됩니다.
따라서..

```javascript
foo();

function foo() {
  console.log("hello");
}
// "hello"
// 함수 선언을 뒤에 했음에도 불구하고 foo() 호출시에     정상적으로 작동
```

### 함수 표현은...

```javascript
var variable = function name(parameter) {
  statements;
};
```

variable : 함수를 담을 변수
name : 함수이름이며 생략가능
parameter : 함수의 인자이며 255개까지 인자를 가질 수 있습니다
statements : 함수의 본문 기술
함수를 **변수에 할당**을 시키면 함수표현이 된다. 변수 선언과 같음

### **자동으로 호이스팅이 되지 않으며, 인터프리터가 라인에 도달해야 실행 가능하다**

```javascript
foo();

var foo = function () {
  console.log("hello");
};

foo();
/*
Uncaught TypeError: foo is not a function
"hello"
*/
```

### 다시 즉시실행함수로 돌아와서

선언과 동시에 사용되는 방법

```javascript
(foo = function () {
  console.log("foo");
})(); // "foo"
```

익명함수 표현식은 다음과 같이 표현한다.

```javascript
(function () {
  console.log("hello");
})(); // "hello"
```

> 소괄호안에 익명의 함수를 기술하면, 소괄호의 시작부분부터 종결부분까지 전체가 평가된 후 반환 된다. 결국 반환값은 자기 자신이 되어버린다

> 위의 코드에서 실제로 반환된 값은 익명함수 전체이다. 반환된 익명함수 전체를실행시키기 위해 괄호를 추가했다. 추가적으로 이 익명함수의 반환값은 무엇일까?

```javascript
var a = (function () {
  console.log("hello");
})();
console.log(a);
//console.log(a());

/* 출력결과
hello
undefined
 
마지막 주석문은 변수 a에는 익명함수가 아닌 익명함수의 반환값인
undefined 이므로 error 이다.
*/
```
