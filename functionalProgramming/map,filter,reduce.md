```javascript
    const products = [
        { name : '반팔티', price: 15000 },
        { name : '긴팔티', price: 20000 },
        { name : '핸드폰케이스', price: 15000 },
        { name : '후드티', price: 30000 },
        { name : '바지', price: 25000 },
    ]; 
```

## MAP

```javascript
    let names = [];
    for(const p of products) {
        names.push(p.name);
    }
    console.log(names);

    let prices = [];
    for(const p of products) {
        prices.push(p.price);
    }
    console.log(prices);


    const map = (f, iter) => {
        let res = [];
        for (const a of iter) {
            res.push(f(a)); // 완전 위임
        }
        return names; // 리턴
    };
    // 함수를 값으로 다룸 , 보조함수
    console.log(map(p => p.name, products));
    console.log(map(p => p.price, products));

    [1,2,3].map(a => a + 1); // O

    // 이터러블 프로토콜을 따른 MAP 의 다형성 1

    document.querySelectorAll('*').map(el => el.nodeNAme); // X

    log(map(el => el.nodeName, document.querySelectorAll('*'))); // O 범용적으로 사용 가능

    function *gen() {
        yield 2;
        yield 3;
        yield 4;
    }

    console.log(map(a => a * a, gen()));

    let m = new Map();
    m.set('a', 10);
    m.set('b', 20);

    console.log(new Map(map(([key, value]) => [key, a * 2], m)));
```

## Filter


```javascript
```