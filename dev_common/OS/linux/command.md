# 리눅스 퍼미션 ( 권한 ) & 기본 명령어 모음

## 권한 부여

Owner - 파일이나 폴더의 소유권자

Group - 자신이 속한 그룹

Other - 제 3자, Nobody 사용자

ls -al 명령어를 입력했을 때, 자신이 지금 디렉토리 내의 모든 파일 또는 디렉토리 상세 정보를 출력해준다.

이때, 폴더 맨 앞에 나오는 문자들이 권한 속성을 나타내준다.

맨 앞줄에 'd' 또는 '-'는 Directory or File 을 나타내며, 'd' 이면 Directory '-' 이면 No Directory(File) 을 의미한다.

그 뒤에 rwx 는 권한을 의미한다.

r : Read(읽기 권한)

w : Write (쓰기 권한)

x : eXecute (실행 권한)

읽기, 쓰기, 실행 - 1세트이며, 총 3세트로 Owner, Group, Other 사용자의 권한을 표시한다.

권한이 없을 때, '-' 로 표시한다.

Owner : rwx, Group : rwx, Other : rwx 이다

자신을 비롯한 누구든지 읽고 쓰고 실행할 수 있다.

chmod 

concatenate (cat) - 사슬 같이 잇다

파일 보기 :  ls, ls -l (long), ls -al(all)

파일 내용 보기 : cat, more, less

파일 만들기/지우기 : touch, rm

파일 복사 : cp

파일 이동 : mv

파일 속성보기 : file

### CMD 파일다루기 : ren *txt *docx txt 파일 docx 로 전부 바꾸기

디렉토리 만들기 : mkdir , rmdir

디렉토리 이동 : cd, cd -

파일 편집기 vi / vim / nano