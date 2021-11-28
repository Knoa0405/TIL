// discriminated : 차별화 할 수 있는 , 식별 할 수 있는
{
    type SuccessState = {
        // Discriminated Union Type
        result : 'success',
        response : {
            body : string;
        }
    }

    type FailState = {
        // Discriminated Union Type
        result : 'fail',
        reason : string;
    }

    type LoginState = SuccessState | FailState;

    // printLoginState(state) {} Success | Fail
    // function printLoginState(state : LoginState) {
    //     if('response' in state) {
    //         return console.log(`🎉 로그인 성공! ${state.response.body}`);
    //     } else {
    //         return console.log(`😭 로그인 실패! ${state.reason}`)
    //     }
    // }

    // Discriminated Union Type
    function printLoginState(state : LoginState) {
        if(state.result === 'success') {
            return console.log(`🎉 로그인 성공! ${state.response.body}`);
        } else {
            return console.log(`😭 로그인 실패! ${state.reason}`)
        }
    }

    // 장점 : 좀 더 직관적으로 코드 작성이 가능하다! ( 코드 가독성이 올라감 )
}