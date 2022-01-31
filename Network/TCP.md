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


```javascript
    const net = require('net');

    // 서버 5000 번 포트 접속
    // 3 way handshake

    const socket = net.connect({ port : 5000 });

    socket.on('connect', function () {
        console.log('connect to server!');
        setInterval(function () {
            socket.write('testing~');
        }, 1000);
    });
    
    // 서버로부터 받은 데이터를 화면에 출력
    socket.on('data', function (chunk) {
        console.log('receive: ', chunk);
    });

    // 접속이 종료 됐을 때 메세지 출력
    // 4 way handshake
    socket.on('end', function () {
        console.log('disconnected.');
    })

    // 에러 발생 시 에러 메세지 화면에 출력
    socket.on('error', function (err) {
        console.log(err);
    });

    // connection 에서 timeout 이 발생하면 메세지 출력
    socket.on('timeout', function () {
        console.log('connection timeout.');
    })

```

1. 클라이언트가 서버에게 testing ~ 전송
2. 서버가 클라이언트에게 메세지를 받으면 test 를 다시 클라이언트로 전송
3. 서버는 메세지 전송 후 socket.end()로 4 way handshake 가 발생하여 커넥션이 끊김
4. 클라이언트는 1초후 testing~ 을 전송하려 시도 ( setInterval )
5. 커넥션이 끊어졌기 때문에 에러 발생


### 4 way-handshake 발생시키지 않고 데이터 지속적으로 주고 받기
- 만약 한번 만들어진 커넥션을 클라이언트가 1초마다 메세지를 전송하는 것을 에러없이 받고 싶다면,  
서버에서 커넥션을 종료하는 socket.end()을 없애면 된다.

### L4 - 응용계층
- 응용 계층은 L3 위에서 동작하는 레이어이다. 여기서 위에서 동작한다는 뜻은 L4 에서 추가된 데이터가  L3 를 통해 전송한다는 것을 의미한다.
```javascript
    socket.write('test');
```

- 응용 계층은 established 한 상태에서 데이터를 주고 받을 때 서버와 클라이언트간 합의한 규칙이다.  
L4의 대표적인 예로 HTTP 가 있다.

### 프로토콜이란?
- HTTP 를 프로토콜 이라고 부른다.

TEST1

```javascript

    const net = require('net');

    const server = net.createServer(socket => {
        console.log(`connected address: ${socket.address().address}`);
    
    socket.on('data', (data) =>{
        console.log(data.toString());
        socket.write('test');
        socket.end();
    });
})

server.listen(5000, function() {
    console.log(`listen on port 5000`);
})

```
- 클라이언트에게 요청을 받으면 클라이언트에게 전달받은 데이터를 출력한 후 test 문자열을 전송 후  
4 way handshake 를 발생시켜 커넥션을 끊는다. 
- 해당 서버를 실행 한 후 브라우저로 localhost:5000 을 접속해본다. 브라우저는 별도의 페이지를 띄우진 않는다. 서버 로그를 확인하면 다음과 같다.

> GET / HTTP/1.1  
> Host: localhost:5000  
> Connection: keep-alive  
> Cache-Control: max-age=0  
> ...


- 서버의 로그를 확인하면 이상한 문자를 출력한다.
- 이부분은 브라우저가 서버로 보내주는 데이터다. ( http header 이다. )
- 브라우저는 기본적으로 http 프로토콜을 따르기 떄문이다.
- ( GET 요청이므로 따로 body 는 없다. )

### HTTP 규약에 맞는 서버
- 이부분이 HTTP 이다. write() 로 전달하는 데이터를 말한다.


```javascript
    const net = require('net');
    const server = net.createServer(socket => {
        console.log(`connected address : ${socket.address().address}`);

        socket.on('data', (data) => { 
            console.log('=========receive data==========');
            const httpMsg = `
            HTTP/1.1 200 Success
            Connection: close
            Content-Length: 1573
            Content-Type: text/html; charset=UTF-8
            Date: Mon ~
            
            <!DOCTYPE html>
            <html lang=kr>
                <meta charset=utf-8>
                <title>HELLO HTTP!</title>
                <body>
                    <h1>HELLO!</h1>
                </body>
            </html>
            `;

            console.log(data.toString());
            socket.write(httpMsg);
            console.log('===========receive data===========');
            socket.end();
        })
    })

    server.listen(5000, function() {
        console.log(`listen on port 5000`);
    })
```

RFC 표준을 따른다. HTTP 1.1 [RFC2616](https://datatracker.ietf.org/doc/html/rfc2616) 에 작성되어 있다.
