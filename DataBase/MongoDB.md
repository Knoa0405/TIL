## MongoDB

4.41 최신 버전 설치시 문제점 발생하여

( cmd 창에서 텍스트 배열이 깨짐 객체 형태로 나와서 알아보기 힘듦)

4.29 하위 버전 설치하니 정상 작동하더라 이유는 모르겠다.

mongoose 설치하고 쓰려는데 networkError 가 나서 새로 설치했다.

중간에 recommended 하는 걸 설치를 안해줘서 그런가 해서 설치해줬다. 

문제는 [localhost](http://localhost) 번호가 안맞아서 일어난 문제 같다.

port 번호만 알맞게 바꿔주니 연결됐다.

#### MongoDB 쿼리

1. MongoDB 전체 collection column 수정 방법
    - unset 사용
    - db.users.updateMany({}, { $unset : { rating : 1} })