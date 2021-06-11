## Reduce 사용법

### 실 사용 ( Promise 객체 쌓기 )

```javascript
    const oddMessages = await names.reduce(async (prev, current, index) => {
    const prevResult = await prev.then()
    if (index % 2 === 0) {
        const result = await sayHello(current)
        return Promise.resolve([...prevResult, result])
    } else {
        return Promise.resolve(prevResult)
    }
    }, Promise.resolve([]))
```