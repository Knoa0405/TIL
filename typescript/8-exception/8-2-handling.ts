{
    class TimeoutError extends Error {}
class OfflineError extends Error {}

class NetworkClient {
    tryConnect(): void {
        throw new Error('no network!');
    }
}

class UserService {
    constructor(private client: NetworkClient) {}

    login() {
        // try {
            this.client.tryConnect();
        // } catch(error) {
        //     console.log('catch!!');
        // }
    }
}

// 에러 발생했을 때 우아하게 처리 못하면 안하는게 낫다.
// 어플리케이션 레벨에서 처리해주는게 좋다.

class App {
    constructor(private userService: UserService) {}

    run() {
        try {
            this.userService.login();
        } catch(error) {
            // show dialog to user
        }
    }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);

service.login();

}