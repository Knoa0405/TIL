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
6. Server Hello Done
7. Client Key Exchange, Change Cipher Spec
- pre-master-key 라는 것을 전송합니다.  
이 키는 1,2 단계에서 생성한 난수를 조합하여 생성하게되며 대칭키로 사용하게될 예정입니다.  
그러므로 안전한 전송을 위해서 공개키 방식을 사용하여 전송합니다.
8.  Change Cipher Spec 
- 클라이언트로 부터 전송받은 pre-master-key를 정상적으로 복호화 후 master-key(대칭키)로 승격 후 보안 파라미터를 적용하거나 변경될때 보내는 알림입니다.
