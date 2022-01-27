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
    let under20000 = [];
    for (const p of products) {
        if(p.price < 20000) under20000.push(p);
    }

    console.log(...under20000);

        let over20000 = [];
    for (const p of products) {
        if(p.price >= 20000) over20000.push(p);
    }

    console.log(...over20000);

    const filter = (f,iter) => {
        let res = [];

        for (const p of iter) {
            if(f(a)) res.push(p);
        }

        return res;
    }

    console.log(...filter(p => p.price < 20000, products));

    console.log(...filter(p => p.price >= 20000, products));

    console.log(filter(n => n % 2, [1, 2, 3, 4])); // [1, 3]

    console.log(filter(n => n % 2, function *() {
        yield 1;
        yield 2;
        yield 3;
        yield 4;
        yield 5;
    }, ()));
```

## Reduce

```javascript
    const nums = [1, 2, 3, 4, 5];

    let total = 0;
    for(const n of nums) {
        total = total + n;
    }

    console.log(total);

    const reduce = (f, acc, iter) => {
        if(!iter) {
            iter = acc[Symbol.iterator]();
            acc = iter.next().value;
        }
        for (const a of iter) {
            acc = f(acc, a);
        }

        return acc;
    };

    const add = (a, b) => a + b;

    console.log(reduce(add, 0, [1, 2, 3, 4, 5])); // 15

    console.log(reduce(add, [1, 2, 3, 4, 5])); // 15

    console.log(reduce(
        (total_price, products) => total_price + products.price,
        0, 
        products));
```