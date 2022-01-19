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


### React Native Firebase version 6 이상 부터
1. onNotificationOpenedApp 메서드 - 앱이 백그라운드에 위치해 있을 때,
2. getInitialNotification 메서드 - 앱이 종료되어 있을 때,
- 두 메서드 모두 사용자가 푸시 알람을 눌러 진입시 호출되는 메서드 제공
- 내부에서 remoteMessage 를 받아 routeName, data 를 받아 해당 화면으로 전환시켜준다.

```javascript
  useLayoutEffect(() => {
    if (isNavigationReady && auth.authToken !== undefined && isHydrated) {
      FirebaseMessaging().onNotificationOpenedApp((remoteMessage) => {
        const messageData: DeepLinkData = remoteMessage.data;
        console.log('Notification caused app to open from background state:', messageData);

        if (messageData?.postId) {
          navigationRef.navigate(
            messageData?.route as never,
            { postId: messageData?.postId } as never,
          );
        }

        if (messageData?.userId) {
          navigationRef.navigate(
            messageData?.route as never,
            { userId: messageData?.userId } as never,
          );
        }
      });

      FirebaseMessaging()
        .getInitialNotification()
        .then((remoteMessage) => {
          const messageData: DeepLinkData = remoteMessage?.data;
          if (messageData) {
            console.log('Notification caused app to open from quit state:', messageData);
            if (messageData.route) {
              setInitialRoute(messageData.route);
            }

            if (messageData?.postId) {
              navigationRef.navigate(
                messageData?.route as never,
                { postId: messageData?.postId } as never,
              );
            }

            if (messageData?.userId) {
              navigationRef.navigate(
                messageData?.route as never,
                { userId: messageData?.userId } as never,
              );
            }
          }
        });
      SplashScreen.hide();
    }
  }, [isNavigationReady, isHydrated, auth.authToken, navigationRef];
```
- 리팩토링이 필요하지만, 어쨋든 root navigation 에서 구현하면 된다.


## 에러 로그
- 안드로이드에서는 위 두 메서드가 작동 하지 않는다??
- 원래는 작동되는 게 정상이지만, 현재 서비스는 react native splash screen 을 사용 중이다.  
### 이게 왜 문제가 되는가?
- 안드로이드 파일 내부를 뜯어보면 답이 나온다.
- 앱 진입 시 처음 접근하는 게 SplashActivity 이고 이걸 만들어 manifest 에 등록 했기 때문에 두 메서드의 이벤트가 MainActivity 에 제대로 전달되지 않았기 때문이다.
- 구현은 MainActivity 와 인터렉션이 발생해야 하지만, SplashActivity 에 막혀 전달이 안되는 상태였다.

#### android SplashActivity 수정
https://github.com/invertase/react-native-firebase/issues/3469#issuecomment-614990736

```java
    public class SplashActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        try {
            // Block of code to try
            super.onCreate(savedInstanceState);

            Intent intent = new Intent(this, MainActivity.class);
            // Pass along FCM messages/notifications etc.
            Bundle extras = getIntent().getExtras();

            if (extras != null) {
                intent.putExtras(extras);
            }
            startActivity(intent);
            finish();
        }
        catch(Exception e) {
            // Block of code to handle errors
            System.out.println(e.getMessage());
        }
    }
}
```

위와 같이 변경하고 빌드를 새로하니 제대로 작동했다.

### 추가 에러 로그
- IOS 에뮬레이터에서 동일하게 작동하는지 푸시 알람을 테스트 하려고 했으나 되지 않아서 왜 안되는지 궁금했다.
1. 퍼미션이 안되어 있는지 체크해봤는데 이미 해당 메서드는 구현되어 호출되고 있었다.

#### 결국은 공식문서!
- 공식문서에는 아래와 같이 서술되어 있었다.
>Quick Tip: On Android you can test receiving remote notifications on the emulator but on iOS you will need to use a real device as the iOS simulator does not support receiving remote notifications.

현재 나는 가상 에뮬레이터를 돌리고 있었기 때문에 안되는 것이었다.  
다음에는 참고해서 실제 기기에서 테스트를 진행해볼 예정이다.
