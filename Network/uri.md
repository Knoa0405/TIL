## URL / URI / URN


### URI ? Uniform Resource Identifier
- URI ? 로케이터 (locator), 이름 (name) 또는 둘다 추가로 분류될 수 있다.
- URI 가 가장 큰 범위 (내부에 URL, URN 이 있다.)
> Uniform : 리소스를 식별하는 통일된 방식  
> Resource : 자원, URI 로 식별할 수 있는 모든 것 ( 제한 없음)  
> Identifier : 다른 항목과 구분하는데 필요한 정보

### URL ? Resource Locator
- 리소스가 있는 위치를 지정
#### Path => 리소스 경로, 계층적 구조
- ex) home/file.jpg | items/iphone2
#### Query => key=value 형태,  ?로 시작, & 로 추가 가능
- ?keyA=valueA&keyB=valueB
- query parameter /query string 으로 불림. 웹 서버에서 제공하는 파라미터, 문자열로 넘어감
#### Fragment
- scheme://[userinfo@]host[:port][/path][?query][#fragment]  
- #fragment html 내부 북마크에 사용됨
- 서버에 전송하는 정보 아님.
### URN ? Resource Name
- 리소스에 이름을 부여