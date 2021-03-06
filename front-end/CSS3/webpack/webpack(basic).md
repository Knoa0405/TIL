## 웹팩의 이해

웹팩은 왜 생겨났나?

ES2015 이전 상황에서 모듈이 나오기 전 상황에서의 문제점은

script 를 반복하여 HTML 파일에 넣고 실행했을 때 각 파일 안에 있는 함수들이 전역으로 선언되어 같은 이름의 함수들이 중첩되어 에러를 발생시킬 수 있다는 점이었다. 

이를 방지하기 위해 사용된 방법이 IIFE 즉시실행함수를 사용하는 것이었다. 스코프를 줘서 외부에서 즉시 실행 함수 스코프 내부에 선언된 함수에 접근 할 수 없도록 구분지어서 외부에서 내부에서 선언된 이름을 그대로 사용하더라도 문제가 없도록 해주었다.

이를 더 활용하기 위한 다양한 모듈 스펙( 명세 ) 가 나오기 시작했다.

자바스크립트 모듈을 구현하는 대표적인 명세가 AMD와 CommonJS 이다.

CommonJS 는 자바스크립트를 어떻게하면 브라우저 밖에서도 동작시킬 수 있을까에서 출발한 명세이다. 그래서 자스를 사용하는 모든 환경에서모듈을 하는 것을 목표로 하였다.

exports 키워드로 모듈을 만들고, require() 함수로 불러 들이는 방식이다.

대표적으로 서버 사이드 플랫폼인 Node.js 에서 이를 사용한다.

AMD는 비동기로 로딩되는 환경에서 모듈을 사용한 것이 목표이다.

주로 브라우저 환경이다.

define() 이라는 것을 사용한다. ( IIFE 와 비슷한 역할을 한다 )

UMD 는 AMD 기반으로 CommonJS 방식까지 지원하는 통합 형태이다.

각 커뮤니티에서 각자의 스펙을 제안하다가 ES2015에서 표준 모듈 시스템을 내놓았다. 지금은 바벨와 웹팩을 이용해 모듈 시스템을 사용한 것이 일반적이다. (export 구문으로 모듈을 만들고 import 구문으로 가져올 수 있다. )

모든 브라우저에서 모듈을 지원하지는 않는다 IE!!!를 포함한 몇몇 브라우저에서는 여전히 모듈을 사용하지 못한다.

```jsx
<script type="module" src="app.js"></script>
```

브라우저에 무관하게 모듈을 사용하기 위해서 웹팩이 등장한다!!

## 엔트리 아웃풋

웹팩은 여러개 파일을 하나의 파일로 합쳐주는 번들러(bundler)다. 하나의 시작점(entry point)으로부터 의존적인 모듈을 전부 찾아내서 하나의 결과물을 만들어 낸다. app.js부터 시작해 math.js 파일을 찾은 뒤 하나의 파일로 만드는 방식이다.

- `-mode`는 웹팩 실행 모드는 의미하는데 개발 버전인 development를 지정한다
- `-entry`는 시작점 경로를 지정하는 옵션이다
- `-output`은 번들링 결과물을 위치할 경로다
- 

```jsx
$ node_modules/.bin/webpack --mode development --entry ./src/app.js --output dist/main.js
```

```jsx
const path = require("path");

module.exports = {
	mode : "development",	
	entry : {
		main : "./src/index.js"
	},
	output : {
		path : path.resolve(__dirname,"./dist"),
		filename : "[name].js"
	},
	module : {
		rules : [{
			test: /\.js$/, // .js 확장자로 끝나는 모든 파일
			use: [path.resolve('./myloader.js')] // 방금 만든 로더를 적용한다
	}],
}
```

웹팩의 로더 역할 : 정적인 파일들을 모듈로 인식 되도록 만드는 역할을 한다.

로더는 함수형태로 만들 수 있다.

content 라는 함수 인자를 받고 반환해준다. 그 때 로더 안에서 정해진 규칙에 따라 변환을 해서 반환을 해준다.