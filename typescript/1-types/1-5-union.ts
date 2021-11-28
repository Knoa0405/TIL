import { resolve } from "path/posix";

{
    // Union Type

    type Direction = 'left' | 'right' | 'up' | 'down';

    function move(direction : Direction) {
        console.log(direction);
    }

    move('right');

    type TileSize = 8 | 16 | 32;

    // const tile: TileSize = 5; // X

    type SuccessState = {
        response : {
            body : string;
        }
    }

    type FailState = {
        reason : string;
    }

    type LoginState = SuccessState | FailState;

    function login(id: string, password: string) : Promise<LoginState> {
        return new Promise((resolve, reject) => {
            resolve({
                response : {
                    body : 'Log In'
                }
            })
        });
    }

    login('noa', '1234');
    
    // printLoginState(state) {} Success | Fail
    function printLoginState(state : LoginState) {
        if('response' in state) {
            return console.log(`🎉 로그인 성공! ${state.response.body}`);
        } else {
            return console.log(`😭 로그인 실패! ${state.reason}`)
        }
    }

    printLoginState({ response  : { body : "Log In" }});
}