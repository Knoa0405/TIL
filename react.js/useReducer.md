## useReducer Hook

reducer 는 현재 상태와 액션 객체를 파라미터로 받아와서 새로운 상태를 
반환해주는 함수입니다.

```javascript
function reducer(state, action) {
  // 새로운 상태를 만드는 로직
  // const nextState = ...
  return nextState;
}
```
reducer 에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태가 됩니다.

여기서 action 은 업데이트를 위한 정보를 가지고 있습니다. 주로 type 값을 지닌 객체 형태로 사용하지만, 
꼭 따라야 할 규칙은 따로 없습니다.

```javascript
// 카운터에 1을 더하는 액션
{
  type: 'INCREMENT'
}
// 카운터에 1을 빼는 액션
{
  type: 'DECREMENT'
}
// input 값을 바꾸는 액션
{
  type: 'CHANGE_INPUT',
  key: 'email',
  value: 'tester@react.com'
}
// 새 할 일을 등록하는 액션
{
  type: 'ADD_TODO',
  todo: {
    id: 1,
    text: 'useReducer 배우기',
    done: false,
  }
}
```
보신 것 처럼 action 객체의 형태는 자유입니다. type 값을 대문자와 _ 로 구성하는 관습이 존재하기도 
하지만, 꼭 따라야 할 필요는 없습니다.

자, 이제 reducer 를 배웠으니 useReducer 의 사용법을 알아봅시다. useReducer 의 사용법은 다음과 같습니다.

```javascript
const [state, dispatch] = useReducer(reducer, initialState);
```

여기서 state 는 우리가 앞으로 컴포넌트에서 사용 할 수 있는 상태를 가르키게 되고, 
dispatch 는 액션을 발생시키는 함수라고 이해하시면 됩니다. 
이 함수는 다음과 같이 사용합니다: dispatch({ type: 'INCREMENT' }).
그리고 useReducer 에 넣는 첫번째 파라미터는 reducer 함수이고, 두번째 파라미터는 초기 상태입니다.