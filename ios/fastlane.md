## fastlane 자동배포하기

### fastlane match 활용!

1. Github 에 Private Repo 를 준비한다.
2. 해당 Repo 에 Certification ( 인증서 ) + Provisionging profiles 을 저장하고 팀원들과 공유할 수 있다.

#### 보안 문제는 없나?

- fastlane 은 기본적으로 Private Repo 의 모든 파일들을 암호화 한다.
- 암호화된 github Repo 를 보면 실제로 이상한 문자열의 나열로 이루어져있다.
- fastlane match 를 사용해서 프로비저닝 프로파일을 갱신할 때, Repo 를 복호화해서 진행한다.
- passphase 를 등록해두면 해당 passphase 로 암,복호화를 진행한다.

https://millo-l.github.io/ReactNative-fastlane-match/
