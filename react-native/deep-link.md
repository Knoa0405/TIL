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
