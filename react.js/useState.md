# React useState 상태 관리

```jsx

function App () {
	const [state, setState] = useState(0);
	const { count } = state
	function onIncrease() {
		setState(prevNumber => prevNumber + 1)
}
	return (
	<div>
		{count}
		<button onClick={onIncrease}></button>
	</div>
)
}

setState 함수 안에 callback 함수를 넘겨준다고 생각하면,

return[_state,v => _state = v]
				state    setState

setState(number + 1)
number + 1 => number = number + 1
(prevNumber => prevNumber + 1) => 
		number = (prevNumber => prevNumber + 1) 

number => prevNumber + 1
```

### setState 는 비동기로 실행된다.

[비동기로 실행되는 이유? - 블로그 참고](https://velog.io/@kym123123/%EB%B9%84%EB%8F%99%EA%B8%B0%EB%A1%9C-%EB%8F%99%EC%9E%91%ED%95%98%EB%8A%94-react%EC%9D%98-setState%EC%97%90-%EB%8C%80%ED%95%98%EC%97%AC)

요약하면, setState 는 render() 메서드가 실행되기 전에 종합된 값을 최종 렌더링 해주기 때문에  
setState 를 여러번 연달아 해준다고 해서, 중간 값들이 계속 렌더링 되는 것이 아니다.  
최종 값만 render() 메서드 호출 전에 종합되어 UI에 반영된다.  

(오류?)
```jsx
const App = () => {
	// 1. 이름을 default 로 정의
	const [state, setState] = useState('Joy');

	// 3. rendering 된 직후 호출됨. => Joy -> Noa 로 변경됨.
	useEffect(() => {
		setState('Noa');
	},[]);
	// 2. 렌더링이 진행됨. => Joy 나타남.
	// 4. 리렌더링이 발생함. => Joy => Noa 로 표시됨.
	return (
		<h1>{name}</h1>
	)
}
```