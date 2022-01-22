### Array 알아보기
```javascript
    const array = [1,2,3];
    array[Symbol.iterator] = null; // 이터레이터 null ( 없애면 )
    for (const a of arr) console.log(a); // 동작하지 않는다.
    // array 는 Symbol.iterator 라는 메서드를 가지고 있다.
    array[Symbol.iterator] => values() { [ native code ] }
    arr[Symbol.iterator]() => Array Iterator {}

    let iterator = arr[Symbol.iterator]();
    iterator.next() // { value : 1, done : false }
    iterator.next() // { value : 2, done : false }
    iterator.next() // { value : 3, done : false }
    iterator.next() // { value : undefined, done : true }

```
### Set 알아보기
```javascript
    const set = new Set([1,2,3]);

    const iter1 = set[Symbol.iterator]();
    iter1.next();

    for (const a of iter1) console.log(a); // result = 2, 3
```
### Map 알아보기
```javascript
    const map = new Map([['a', 1],['b', 2],['c', 3]]);
    for(const a of map.keys()) console.log(a); // a, b, c
    for(const a of map.values()) console.log(a); // 1, 2, 3
    for (const a of map) console.log(a); // ['a', 1],['b', 2],['c', 3]
```

### 이터러블 / 이터레이터 프로토콜
- 이터러블 : 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값
- 이터레이터 : { value , done } 객체를 리턴하는 next() 를 가진 값
- 이터러블/이터레이터 프로토콜  : 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록 한 규약


#### 스스로 정리
- 이터러블은 이터레이터를 리턴하는 [Symbol.iterator]() 메서드를 가진 값이다.
