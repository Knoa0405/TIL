## 제너레이터/이터레이터
- 제너레이터 : 이터레이터이자 이터러블을 생성하는 함수

```javascript
    function *gen() {
        yield 1;
        yield 2;
        yield 3;
        
    }

    let iter = gen();
    console.log(iter[Symbol.iterator]() == iter); // true
    console.log(iter.next()); // { value : 1, done : false }
    console.log(iter.next()); // { value : 2, done : false }
    console.log(iter.next()); // { value : 3, done : false }
    console.log(iter.next()); // { value : undefined, done : true }

    for (const a of gen()) log(a);

    function *gen() {
        yield 1;
        yield 2;
        yield 3; 
        return 100; // return 되지만 done true 할 때, value 를 나타내는 용도로만 사용됨.
    }

    let iter = gen();
    console.log(iter[Symbol.iterator]() == iter); // true
    console.log(iter.next()); // { value : 1, done : false }
    console.log(iter.next()); // { value : 2, done : false }
    console.log(iter.next()); // { value : 3, done : false }
    console.log(iter.next()); // { value : 100, done : true }
    // generator 함수를 통해 순회할 수 있는 형태로 값을 만들 수 있다.
    // 굉장히 다양한 값들을 간단하게 순회할 수 있는 이터레이터로  만들 수 있다.
    function *gen() {
        yield 1;
        if (false) yield 2;
        yield 3;
    }

    let iter = gen();
    console.log(iter[Symbol.iterator]() == iter); // true
    console.log(iter.next()); // { value : 1, done : false }
    console.log(iter.next()); // { value : 3, done : false }
    console.log(iter.next()); // { value : undefined, done : true }
```

### odds

```javascript
    function *odds() {
        yield 1;
        yield 3;
        yield 5;
        yield 7;
    }

    let iter2 = odds();
    console.log(iter2.next()); // { value : 1, done : false }
    console.log(iter2.next()); // { value : 3, done : false }
    console.log(iter2.next()); // { value : 5, done : false }
    console.log(iter2.next()); // { value : 7, done : false }
    console.log(iter2.next()); // { value : undefined , done : true }

    function *odds(arg) {
        for(let i = 0; i < arg; i++) {
            if(i % 2) yield i; // 2로 나눠서 나머지 생기는 값들이 있으면 true , 즉 홀수
        }
    }

    let iter2 = odds(7);
    console.log(iter2.next()); // { value : 1, done : false }
    console.log(iter2.next()); // { value : 3, done : false }
    console.log(iter2.next()); // { value : 5, done : false }
    console.log(iter2.next()); // { value : 7, done : false }
    console.log(iter2.next()); // { value : undefined , done : true }

    function *infinity(i = 0) {
        while (true) yield i++;
    }

    let iter3 = infinity();

    console.log(iter3.next()); // { value : 1, done : false }
    console.log(iter3.next()); // { value : 2, done : false }
    console.log(iter3.next()); // { value : 3, done : false }
    console.log(iter3.next()); // { value : 4, done : false }
    console.log(iter3.next()); // { value : 5, done : false }
    console.log(iter3.next()); // { value : 6, done : false }
    console.log(iter3.next()); // { value : 7, done : false }
    ...


    function *odds(arg) {
        for(const a of infinity(1)) {
            if(a % 2) yield a; // 2로 나눠서 나머지 생기는 값들이 있으면 true , 즉 홀수
            if(a == arg) return;
        }
    }

    function *limit(arg, iter) {
        for(const a of iter) {
            yield a;
            if(a == arg) return;
        }
    }

    function *odds(arg) {
        for(const a of limit(arg, infinity(1))) {
            if(a % 2) yield a; // 2로 나눠서 나머지 생기는 값들이 있으면 true , 즉 홀수
        }
    }

    for (const a of odds(10)) log(a); // 1, 3, 5, 7, 9
    
```