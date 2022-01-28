### TCP 서버 구현하기

```javascript
// node.js 런타임 환경
const net = require('net');

const server = net.createServer(socket => {
    console.log(`connect address : ${socket.address().address}`);
    socket.on('data', (data) => {
        console.log(data.toString());
        socket.write('test');
        socket.end();
    });
})

server.listen(5000, function() {
    console.log('listen on port 5000');
})
```
> 위 코드를 통해 TCP 서버를 실행합니다.
- $ sudo lsof -i -P | grep :$PORT | grep node

#### 1. server.listen 메서드를 통해 서버를 5000번 포트로 연결을 수행한다.  
#### 2. 사용자는 IP:PORT 를 통해 해당 어플리케이션과 데이터를 주고 받을 수 있다.  
#### 3. net.createServer 는 다른 응용프로그램이 연결을 요청하면 내부적으로 3 way-handshake 이후 연결된 세션 객체를 콜백을 전달한다.  
#### 4. 해당 코드에서는 세션 객체를 socket 으로 사용한다.
#### 5. socket.on('data') 는 클라이언트가 데이터를 전송할 때 발생하는 이벤트이다.
#### 6. socket.write('test'); 는 데이터를 전달한다.
#### 7. socket.end() 가 호출되면 4 way-handshake 가 발생하고 커넥션이 끊어진다.

### TCP 클라이언트 구현해보기

```javascript
const net = require('net');

// 서버 5000 번 포트로 접속;
// 3 way-handshake
const socket = net.connect({ port: 5000 });
```

#### 1. net.connect 를 통해 3 way-handshake 가 발생하여 TCP 커넥션을 생성한다.
#### 2. 서버가 실행된 상태에서 클라이언트 코드를 실행하면 서버에서 콘솔에 클라이언트 주소가 출력되는 모습을 확인할 수 있다.
