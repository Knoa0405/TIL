## https 란?

## 동작방식
1. Client Hello
- 브라우저 마다 지원하는 암호화 알고리즘과 TLS 버전이 다르므로 해당 정보를 전송하며, 난수 값을 생성하여 전송합니다.  
2. Server Hello
- 사용할 TSL 버전, 사용할 암호화 알고리즘, 난수값을 전송합니다.
3. Certificate
- CA로 부터 발급받은 인증서를 전송합니다.
4. Server Key Exchange
- 키 교환에 필요한 정보를 제공합니다.
5. Certificate Request
