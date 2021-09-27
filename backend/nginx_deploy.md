### Nginx 로 React 배포하는 법 with Docker

React → 보통 Create React App 의 경우 Webpack 이 내장되어 있다. Webpack dev Server 의 경우 Hot-Reload 기능과 같은 개발에 필요한 것들을 제공해주는 웹 서버이므로 운영 환경 ( 배포 환경 ) 에 사용하기에는 부적절하다. ( 사용할 수는 있지만, 불필요한 부분들이 많고 무겁다. ) 따라서, nginx 와 같은 가벼운 소프트웨어로 웹 서버를 구축하여 배포하면 비교적 효율적이다. Docker 를 사용하면 nginx 를 쉽고 빠르게 구축하여 사용할 수 있다.

아래는 위에서 설명한 환경 구축을 위한 첫번째 단계로 docker 빌드를 위한 Dockerfile 이다.

```docker
FROM node:alpine as builder
WORKDIR 'usr/src/app'
COPY package.json .
RUN npm install
COPY ./ ./
RUN npm run build

FROM nginx
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

```

도커 파일은 dev 버전과 production 배포 버전 두가지로 설정해 사용해주는 것이 좋다

