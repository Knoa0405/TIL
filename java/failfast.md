## List 순회 중 만난 ConcurrentModificationException  과 컬렉션 불변성

### Java로 개발을 진행하다가 ArrayList 사용하여 구현 하던 중...

### ConcurrentModificationException 에러를 만나게 되었고, 이를 해결하면서 공부한 내용을 정리한다.
<br/>

1. java 의 Fail Fast 방식 동작 중 오류가 발생하느면 바로 오류를 알리고 작업을 중단한다.
- Fail safe 방식과 의 차이점은 동작 중 오류가 발생하더라도 작업을 중단하지 않고 진행한다.

2. 자바에서는 iterator 가 for 문을 이용한 순환 중 데이터가 변경 되었을 때,  
    Fail-Fast 의 경우  java.util.ConcurrentModificationException 오류를 throw 하고, Fail-Safe 방식이면 동작이 계속된다.

<br/>

### 해결방법

- 내부 동작 코드는 아래와 같다.

<br/>

```java
List<String> targetList = new ArrayList<String>();
targetList.add("a");
targetList.add("b");
targetList.add("c");
targetList.add("d");
Iterator<String> ite = targetList.iterator();
 
while(ite.hasNext()) {
     String str = ite.next();
     if ("a".equals(str)) {
          targetList.remove(str);
     }
}
```

### java.util.concurrent 패키지에 정의된 클래스를 사용했다.

### Why ?
1. iterator 를 통해 List 자체가 아닌 iterator를 제거해주면 멀티 쓰레드 환경상에서는 성능 이슈가 발생하기 때문이다.  
2. 가장 간단하면서 쉬운 방법이기 때문이다. java util 에서 제공하는 컬렉션 CopyOnWriteArrayList 을 사용해주면 해결된다.