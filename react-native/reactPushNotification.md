# 리액트 네이티브 푸시 알림 구현
### 목적
1. 실시간 메세지 ( graphql subscription ) 를 구현했다.
2. app 이 백그라운드, 사용자가 앱을 비활성화 해뒀을 때 푸시 알람을 구현하는 것이 목표다.
3. 메세지가 올 때, 카카오톡처럼 푸시 알람을 구현해보고자 한다.

2021.07.08
#### React native push notification library 사용
- 일단 메세지가 오면, 그것을 감지하는 이벤트가 필요하다.
- graphql 에서는 pubsub 방식으로 구현이 되어 있고, messages 배열의 길이가 달라지는 것을 이용해
메세지 푸시 알람에 message 를 띄워주는 방식을 사용해야 한다.

### OneSignal Api 를 사용하여 채팅 푸시 알람을 구현 함.