## 젠킨스와 Travis ci
1. 젠킨스는 무엇인가?
- 지속적 통합  CI(Continuous Integration) 서비스 제공 툴
- 허드슨 프로젝트로 개발 되었다.
- 허드슨 개발은 2004년 여름 썬 마이크로시스템즈에서 시작되었다.
- java.net 에 처음 출시 되었다.
- 젠킨스와 같은 CI 툴이 등장하기 전에는 일정 시간마다 빌드를 실행하는 방식이 일반적이었다. ( nightly-build )
- 젠킨스는 정기적인 빌드에서 서브 버전 , Git 과 같은 버전 관린 시스템과 연동하여 소스의 커밋을 감지하면   
자동적으로 자동화 테스트가 포함된 빌드가 작동 하도록 설정할 수 있다.
#### 단점
- #### 젠킨스 서버를 띄워야 한다.
- AWS 에 EC2 에 인스턴스 생성 후 젠킨스 받아서 띄우면 된다. ( 불편 )

2. What is Travis CI? 
CI 서비스 중 하나로, 깃헙에 호스팅 되는 소프트웨어  
프로젝트의 빌드, 테스트를 위해 사용된다.
- 별도 회사 였으나, GitHub 에서 인수 하였다.
- ( GitHub Actions 에서 지원 되는 것을 보임 )
#### 장점
- GitHub 과 연동 편리
- YML 파일을 통한 쉬운 설정
- 다양한 레퍼런스 지원
- #### 직접 서버를 운영할 필요 없이 Travis 에서 알아서 VM 으로 호스팅해준다.
- 모든 Job이 독립적이다.

#### 단점
- Jenkins 에 비해 플러그인의 종류가 적다.
- 유료 서비스를 사용할 경우 비싸다. ( 젠킨스는 구축은 어렵지만 무료! )

#### Travis CI 사용법
- github 과 연동이 잘된다.

#### Build Flow
- 먼저, 수정한 내용을 Github에 Push하면, 미리 설정한 연결에 의해 Github는 Travis CI에게 Trigger를 준다. 
- Travis CI는 Trigger에 의해 빌드 Job을 자동으로 시작하게 되고, 
- 최종적으로 (그리고 선택적으로) Heroku Deploy나 Slack 알림을 주게 된다. 
- (그리고 Github에게도 그 정보가 전달된다.)

Pull Request에 대해서도 기본적으로 동일한 동작을 하게 되는데,  
Trigger에 의해 빌드가 끝나면 그 정보가 Github에게 전달되게 된다

#### 언어와 jdk의 버전을 지정한다.
language: java
jdk:
  - openjdk11

#### 어느 브랜치가 push 될 때 수행할지 지정한다. 
#### 오직 main 브랜치가 push될 때 수행하도록 지정하였다.
branches:
  only:
    - main

#### 빌드 전에 gradlew의 권한을 추가한다.
before_install:
  - chmod +x gradlew

#### Travis CI 서버의 Home
#### gradle을 통하여 의존성을 받게 되면 이를 캐시하여 배포할 때 마다 다시 받지 않도록 설정한다.
cache:
  directories:
    - '$HOME/.m2/repository'
    - '$HOME/.gradle'

#### main 브랜치에 push 되면 수행되는 명령어이다. 
#### 프로젝트 내에 권한이 추가된 gradlew를 활용하여 clean, build를 진행한다.
script: "./gradlew clean build"

#### CI 실행 완료 시 작성한 이메일로 알람
notifications:
  email:
    recipients:
      - dev.hyeonic@gmail.com

#### CI 자동 배포 법
