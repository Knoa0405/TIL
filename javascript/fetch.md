# Fetch ?

## fetch 에는 일반적인 객체로 request와 response 가 포함되어 있다.

- ### fetch() 를 불러들이는 경우, 취득할 리소스를 반드시 인수로 지정해야한다.

  > ex) fetch('html'), fetch(url)

- ### fetch() 는 promise 객체를 반환한다.
- ### 리퀘스트가 성공하던 안하던 해당 리퀘스트 통신에 대한 response 객체가 취득된다.
- ### fetch() 의 두번째 인수는 초기화에 사용되는 객체를 정의한다.
- ### 이 두번째 인수는 기입하지 않아도 함수 동작에 문제가 없다.
- ### reponse를 가져온 후 , 콜백 함수의 매개 변수로 담긴 reponse 객체에는 리스폰스에 포함된 컨텐츠와 <br> 그에 대한 처리방법이 담긴 메소드들이 담겨 있다.