## module exports 모듈

module.exports 는 모듈을 만들 때 사용한다.

module 객체 말고 exports 객체로도 모듈을 만들 수 있다.

```javascript
exports.odd = "홀수입니다";
exports.even = "짝수입니다";
```

module.exports로 한번에 대입하는 대신, 각각의 변수를 exports 객체에 하나씩 넣는다.  
동일하게 동작하는 이유는 module.exports 와 exports 가 같은 객체를 참조하기 때문이다.  
따라서 exports 객체에 add 함수를 넣으면 module.exports에도 add 함수가 들어간다.
즉, module 의 props로 exports 가 들어 있고, exports.~~ = value 방식으로 exports 내부에  
함수든 , 값을 넣게되면 module.exports 에 들어 가는 것과 같다는 뜻.

## 노드에서 this ?

최상위에 존재하는 this는 module.exports ( 또는 exports 객체) 를 가리킨다.  
또한, 함수 선언문 내부의 this 는 global 객체를 가리킨다.

## require 함수 / 함수는 객체이므로...

require는 객체로서 몇가지 속성을 갖고 있다.  
require.cache 와 require.main 에 대해 알아본다.  

