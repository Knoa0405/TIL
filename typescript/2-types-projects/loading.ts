{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(state : ResourceLoadState) : void {
    if(state.state === 'loading') {
      return console.log('👀 loading...');
    }
    if(state.state === 'success') {
      return console.log(`😃 ${state.response.body}`);
    }
    if(state.state === 'fail') {
      return console.log(`😱 ${state.reason}`);
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); //  v
}
