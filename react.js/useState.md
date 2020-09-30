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