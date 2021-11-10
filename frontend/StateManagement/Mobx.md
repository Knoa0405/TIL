### MobX 란?
- Flux 아키텍처를 따르면서, redux 보다는 보일러 플레이트가 적고, Spring 과 같이 @ 데코레이터? 를 사용한다.
- UI 와 비즈니스 로직을 분리하여 UI 가 여러 형태로 변경되더라도 상태 관리 흐름에 영향을 주지 않는 것을 원칙으로 만들어진 상태 관리 라이브러리이다.
#### MobX 아키텍처
<img src="../../images/mobxArch.png" width="400px" alt="Mobx 아키텍처 이미지">

1. Store = Service ?
    - Mobx store 의 경우, observable 한 state(상태)를 가지고 있다.
    - Store 는 싱글톤으로 유지해야한다.

2. Repository = Repository ?
    - Mobx Repository는 Ajax로 데이터를 가져오는 부분이다. 데이터를 가져오는 부분도 Layer를 나누어 구성하는 것을 권장하고 있다. 
    비즈니스 로직 분리의 이점도 있지만 Test 코드 작성 시 Mocking이 용이 하다는 장점도 있다. 

3. Model = Entity or DTO ?
    - Entity 란 ?  
        ◎ 데이터의 집합을 의미한다.  
        ◎ 저장되고, 관리되어야하는 데이터이다.  
        ◎ 개념, 장소, 사건 등을 가리킨다.  
        ◎ 유형 또는 무형의 대상을 가리킨다.
```javascript

@Autobind
class UserModel {
  constructor(data) {
    // Object.assign과 유사한 mobx가 제공하는 api를 사용하여 @observable(관찰가능한 state, rendering 되는) state로 만들어
    // UserModel에 멤버 property로 추가해준다.
   =] extendObservable(this, data);
  }

  // 사용자명과 지점명을 합친 getter
  // @computed는 값이 변경되도 이전 값과 값이 같으면 불필요한 렌더링을 하지 않는다.
  @computed
  get userWithAgency() {
    return `$($)`;
  }

  @action
  changeUserName(userName) {
    this.userName = userName;
  }
}
```

4. MobX는 React와 독립적으로 작동하지만 가장 일반적으로 함께 사용된다.
이 통합에서 가장 중요한 부분인 React 구성 요소를 둘러쌀 수 있는 Observer HoC를 살펴보자.

```javascript

import { observer } from "mobx-react-lite";
import { makeAutoObservable } from "mobx";

class Timer {
    seconds = 0

    constructor {
       makeAutoObservable(this)
    }

    increaseTime() {
        this.seconds += 1
    }
};

const myTimer = new Timer();

const TimerView = observer(({ timer }) => <span>Seconds : {timer.seconds}</span>);

ReactDOM.render(<TimerView timer={myTimer}/>, document.body);

setInterval(() => {
    myTimer.increaseTime();
}, 1000);

```

5. MobX - computed Value ? (계산된 값)
- computed values는 state의 변화로 인해 계산된 값이다. computed는 일종의 캐싱이다.  
computed 내부에서 사용하는 state가 변경되었을때만 새로 계산해서 계산값을 저장해놓고 사용한다.   
만약에 computed내부 state가 변경되지 않았으면 기존에 계산해놨던 캐싱값을 그대로 다시 사용한다.

6. 