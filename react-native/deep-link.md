### Firebase push notification in React Native

#### 앱이 백그라운드( background )에 있거나 Quit ( 종료 ) 되었을 때,

```javascript
    FirebaseMessaging().setBackgroundMessageHandler(async (message) => {
    console.log(message);
    });

    AppRegistry.registerComponent(appName, () => <App />);
```
- index.js 에서 호출해서 설정해줘야 작동한다. ( IOS , Android )
- AppRegistry.registerComponent 밖에서 호출해서 사용해줘야 한다.