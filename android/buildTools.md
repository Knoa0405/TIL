## build.gradle ? Maven ?

⇒ gradle vs  maven

빌드 관리 도구

프로젝트에서 필요한 xml, properties, jar 파일들을 자동으로 인식하여 빌드해주는 도구

소스 코드를 컴파일, 테스트, 정적 분석 등을 하여 실행 가능한 앱으로 빌드해줌

프로젝트 정보 관리, 테스트 빌드, 배포 등의 작업을 진행해준다.

### Maven ?

⇒ 자바의 대표적인 관리 도구였던 Ant 를 대체하기 위해 개발됨

프로젝트의 외부 라이브러리를 쉽게 참조할 수 있게 pom.xml 파일로 명시하여 관리

참조한 외부 라이브러리에 연관된 다른 라이브러리를 자동으로 

자동으로 라이브러리 관리 / Dependency 관리

XML 기반의 빌드 스크립트

( 대규모 프로젝트의 경우 xml 로 관리해줘야 하기 때문에 관리가 어려움 )

⇒ 라이프 사이클 도입

Maven 간단 사용법

⇒ pom.xml 파일을 활용하여 빌드 및 관리

pom.xml 역할

- 프로젝트 정보 관리
- modelVersion
- groupld - 사이트 도메인을 역순으로 적어 사용
- artifactId - 다른 프로젝트와는 구분할 수 있는 프로젝트의 id를 작성
- version
- name
- description
- properties : pom.xml 파일 내에서 빈번하게 사용되는 중복 상수를 정의하는 영역
- dependencies : 해당 프로젝트에서

### Gradle ?

- Groovy 스크립트를 활용한 빌드 관리 도구
- 안드로이드 프로젝트의 표준 빌드 시스템으로 채택
- 멀티 프로젝트( Multi-Project) 의 빌드에 최적화 하여 설계됨
- Maven 에 비해 더 빠른 처리속도를 가지고 있음
- Maven 에 비해 더 간결한 구성이 가능함