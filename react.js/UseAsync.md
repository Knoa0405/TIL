## 데이터를 요청해야 할 때 마다 리듀서를 작성하는 것은 번거롭다.

### 커스텀 훅(hook)을 만들어 요청 상태 관리 로직을 재사용하는 방법을 연습했다.
```javascript
import { useReducer, useEffect } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'LOADING':
      return {
        loading: true,
        data: null,
        error: null
      };
    case 'SUCCESS':
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case 'ERROR':
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function useAsync(callback, deps = []) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false
  });

  const fetchData = async () => {
    dispatch({ type: 'LOADING' });
    try {
      const data = await callback();
      dispatch({ type: 'SUCCESS', data });
    } catch (e) {
      dispatch({ type: 'ERROR', error: e });
    }
  };

  useEffect(() => {
    fetchData();
    // eslint 설정을 다음 줄에서만 비활성화
    // eslint-disable-next-line
  }, deps);

  return [state, fetchData];
}

export default useAsync;
```

### useAsync 함수에서 두가지 파라미터를 받아온다.
1. API 요청을 시작하는 함수
2. deps ? deps값은 해당 함수 안에서 사용하는 useEffect의 deps로 설정된다.

### 이값은 나중에 우리가 사용 할 비동기 함수에서 파라미터가 필요하고,
### 그 파라미터가 바뀔때, 새로운 데이터를 불러오고 싶은 경우 활용할 수 있다.
### deps의 기본값은 [] 이다. 즉, 컴포넌트가 렌더링 할 때만 API를 호출하고 싶다는 의미이다.

## 위에서 작성한 HOOK에서 반환하는 값은 요청 관련 상태와, fetchData 함수이다.
## 이렇게 fetchData 함수를 반환하여 나중에 데이터를 쉽게 리로딩을 해줄 수 있다.

### 이 훅을 사용하면 아래와 같다.

```javascript
import React from 'react';
import axios from 'axios';
import useAsync from './useAsync';

// useAsync 에서는 Promise 의 결과를 바로 data 에 담기 때문에,
// 요청을 한 이후 response 에서 data 추출하여 반환하는 함수를 따로 만들었습니다.
async function getUsers() {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  return response.data;
}

function Users() {
  const [state, refetch] = useAsync(getUsers, []);

  const { loading, data: users, error } = state; // state.data 를 users 키워드로 조회

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={refetch}>다시 불러오기</button>
    </>
  );
}

export default Users;
```
