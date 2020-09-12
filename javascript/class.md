# 자바스크립트 클래스의 이해
## es6 이후 도입되었다. 초기에는 객체를 이용해 클래스를 대체했다.
```javascript
    class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log("eatting");
    }

    run() {
        console.log("Running");
    }
    
    const noa = new Person("noa",20);
    noa.eat();
    noa.run();
    console.log(noa.name,noa.age);

```

- ### 위 클래스를 사용하면 생성자에 정의된 field 와 method 들을 어떤 사람이든 사용할 수 있다.
- ### 생성자 메소드 안에 정의된 this 프로퍼티는 클래스를 인스턴스화해서 변수에 할당할 때, 바로 초기화 할 수 있다.
- ### this 바인딩 관련해서는 일반함수는 브라우저 상에서 글로벌 window를 this로 바인딩하고 있다.
- ### class 안에서 위에 나오는 eat() 메소드 함수의 경우 this 는 상위 클래스인 Person을 가리킨다.


## 화살표 함수의 경우 일반 함수가 동적으로 this를 바인딩 하는 것이 아닌, 정적으로 this를 바인딩한다.

### 이와 관련된 것은 나중에 JS 문법 정리에서 정리해서 다룰 것이다.