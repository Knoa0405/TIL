## 비동기 처리

웹 프론트엔드의 복잡성은 계속 증가하고 있습니다.  
반면 JavaScript는 싱글 쓰레드 기반 이벤트 루프로 실행되기 때문에 동기 로직이  
많아질수록 브라우저에서 앱의 사용성이 급격히 줄어들 겁니다. 따라서 현대의 JavaScript를   
다루는 개발자라면 비동기와 동시성(concurrency),  
나아가 병렬성(parallelism)에 대한 이해가 필수적입니다.

흔히 Promise에 대한 자료를 보면 callback hell을 해결해준다는 말이 많지만 이는 Promise의 진정한 가치는 아닙니다.   
그러면 왜 사용할까요? callback의 호출 시점은 우리가 정할 수 없습니다.  
반면 Promise는 원할 때 호출할 수 있습니다.then이 바로 그 시점이죠. 물론 resolve된 상태여야 합니다.  

AJAX(Asynchronous JavaScript And XML)은 특정한 기술이 아닌 비동기적인 웹 애플리케이션 제작을 위한  
기법을 나타냅니다. ES2015 이전엔 AJAX를 위해 사용하던 API인 XMLHttpReqeust가 브라우저에 내장되어   
있었지만 ES2015부턴 Fetch API가 표준으로 등장하면서 이젠 fetch를 많이 사용합니다.

## Redux Thunk middleware
Redux Thunk middleware는 Action creator가 액션을 반환하는 대신에 함수를 반환합니다.  
그래서 특정 액션이 실행되는 것을 지연시키거나 특정한 조건이 충족될 때만 액션이 실행될 수 있도록 할 수 있습니다.