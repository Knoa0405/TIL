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
Array, Set, Map 객체 모두 이터러블 값이라고 할 수 있다.
- 이터레이터는 value 와 done 객체를 리턴하는 next() 메서드를 가졌다.  
    1. array 는 Symbol.iterator 를 가졌고 이건 이터레이터를 리턴하는 메서드다.
    2. 해당 메서드를 호출하면 이터레이터 객체가 나오고 해당 객체는 next() 메서드를 가진다.
    3. next() 메서드를 호출하면 { value : T , done : boolean } 객체가 리턴된다.

- 이터러블/이터레이터 프로토콜은 for...of 문을 이터러블 객체와 함께 사용하면 동작되도록 한 규약이다.

### 사용자 정의 이터러블을 통해 알아보기
```javascript
    const iterable = {
        [Symbol.iterator]() {
            let i = 3;
            return {
                next() {
                    return i == 0 
                    ? { value : undefined, done : true } 
                    : { value : i--, done: false }
                },
                [Symbol.iterator]() { return this; }
            }
        }
    }
    let iterator = iterable[Symbol.iterator]();
    iterator.next(); // { value : 3 , done : false }
    iterator.next(); // { value : 2 , done : false }
    iterator.next(); // { value : 1 , done : false }
    iterator.next(); // { value : undefined , done : true }

    for(const a of iterable) log(a);

    const array = [1, 2, 3];
    let iter2 = array[Symbol.iterator]();
    iter2.next();
    // iter2 역시 iter2[Symbol.iterator] 을 가지고 있어야한다.
    iter2[Symbol.iterator]() == iter2 // true
    // Well formed iterator
    for(const a of iter2) log(a); // 2 , 3
    // 이터레이터를 for of 문에 넣었을 때 남은 배열을 순회 할 수 있게 해야 한다.


```