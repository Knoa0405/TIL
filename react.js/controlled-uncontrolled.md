## 제어 컴포넌트와 비제어 컴포넌트란?
---
### 자주 쓰던 React 를 뜯어보자 1편
( 개인 공부, 생각 정리용 글이므로 오류가 있을 수 있음 )

- 우리가 Vanilla Javascript 를 공부하고 난 뒤 React 라는 자바스크립트 라이브러리를 접하면 가장 먼저 공부하는 것들이 상태 관리와 가상 DOM 개념이다. * 본인은 그랬었다.

### 상태 관리 ?

- 정말 간단히 말하면 프론트엔드에서 백엔드에서 받아온 데이터를 관리한다고 생각하면 된다. 해당 컴포넌트의 상태 즉, 데이터를 서버에서 받아오고 원하는 형태로 UI 컴포넌트에 뿌려주는 일련의 과정을 말한다.

- 여러 컴포넌트들이 상태(데이터)를 공유하며 상호 작용 하기 때문에 Management 를 통해서 디버깅이 쉽고 데이터의 흐름이 잘 보이도록 해줘야 한다.

- 자바스크립트 라이브러리, 프레임워크는 다양하고 해당하는 상태 관리 라이브러리 또한 많다. ( 하지만 기본 개념은 동일하다. )

### 가상 DOM ?

- 우리가 브라우저 동작 원리를 공부하다보면 자바스크립트 렌더링 엔진이 HTML 마크업 언어를 파싱해서 
DOM, CSSOM 을 분석 후 렌더 Tree, 를 만들어 Paint, Layout, Composite 을 거치는데,

가상 DOM 이란, DOM 형성시에 React 에서 동시에 가상 DOM 을 메모리에 만들어 두고, 상태 변경이 발생하는 요소가 생기면 리렌더링을 통해 해당 요소를 변경시킨다.

( 이때 React.Memo 등으로 리렌더링이 필요한 요소만 리렌더링이 되도록 더 최적화를 해줄 수 있다. )

< 원리 >
- 가상 DOM 이란, Real DOM 과 Virtual DOM 이 동기화 되는 프로그래밍 개념이다. 이 프로세스를 재조정 (Reconciliation) 이라 한다.

- 리액트는 Diffing Algorithm 을 사용해서 Real DOM 과 Virtual DOM 을 비교해 변화가 일어난 DOM 요소만 새로 렌더링 한다.

- 간단히 말해 Real DOM 의 잦은 변화를 막는 버퍼 역할을 해준다고 볼 수 있다.

- React 16 이후로 나온 React Fiber 개념이 나왔다. React 는 DOM 조작을 최소화 해주는 장점은 있지만, JS single-thread 굴레를 벗어나진 못하기 때문에 복잡한 애니메이션과 연산 작업이 있으면 Virtual DOM 도 이 문제를 말끔히 해소해주지는 못한다. Fiber 는 자바스크립트 객체로 이 문제를 해결해준다. 조각조각 stack이 끊기고 사이에 다른 작업이 들어와서 처리되도록 하는 역할을 한다.

[React Fiber란?](https://codesquad-yoda.medium.com/%EB%82%A8%EB%8B%A4%EB%A5%B8-%EA%B0%9C%EC%84%A0%EB%B0%A9%EB%B2%95%EC%9D%84-%EB%8B%A4%EC%8B%9C-%EB%B3%B4%EC%97%AC%EC%A4%80-%ED%8E%98%EC%9D%B4%EC%8A%A4%EB%B6%81%EC%9D%98-react-fiber-80b7ca5bd9bb)

https://developers.google.com/web/fundamentals/performance/rendering?hl=ko
