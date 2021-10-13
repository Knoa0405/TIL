# Travis auto Deploy
## 1. Travis.yml 설정

```yml
    sudo : required

    language : generic

    services : 
    - docker

    before_install :
    - echo "start creating an image with dockerfile"
    - docker build -t knoa0405/docker-react-app -f Dockerfile.dev .

    script :
    - docker run -e CI=true knoa0405/docker-react-app npm run test -- --coverage
    
    deploy :

    provider : elasticbeanstalk

    region : "ap-northeast-2"
    
    app : "test1"
    
    env : "Test1-env"
    
    bucket_name : "elasticbeanstalk-ap-northeast-2-416263461894"
    
    bucket_path : "test1"
    
    on :
        branch : main
    
    access_key_id : $AWS_ACCESS_KEY
    secret_access_key : $AWS_SECRET_ACCESS_KEY

```

## 2. Elastic bean Stalk
- Elastic Beanstalk는 AWS에 애플리케이션을 배포하는 가장 빠르면서 간편한 방법입니다. 
AWS Management Console, Git 리포지토리 또는 Eclipse나 Visual Studio와 같은 IDE(통합 개발 환경)를 통해 애플리케이션을 업로드하기만 하면 Elastic Beanstalk가 용량 프로비저닝, 로드 밸런싱, Auto Scaling, 애플리케이션 상태 모니터링에 대한 배포 정보를 자동으로 처리합니다. 몇 분 후면 애플리케이션을 사용할 수 있습니다. 인프라나 리소스를 구성할 필요가 전혀 없습니다.

## < 설정 방법 >
1. AWS 접속
2. EB 메뉴얼에 따라 application 생성
3. IAM 권한 부여 - fullAccessEB
4. EB application name , env 이름을 travis yml config 에 기입
5. S3 bucket_name 을 travis yml 에 기입
6. 리전 입력
7. access_key / secret_access_key 를 기입 -> IAM 에서 발급받은 키 입력 ( travis ci console 에서 진행 가능 )
8. git add . commit push 하면 자동으로 배포 진행

