# RDBMS (Relational Data Base Management System)

* Table based 테이블 기반의 DBMS

* 테이블- 컬럼 형태의 데이터 저장 방식이다.

* 테이블간의 연관관계는 주로 foreign Key 를 이용해 필요한 정보를 구하는 방식이다.

* 모델링은 E-R 모델을 사용한다.

> ? E-R 모델이란? <br>
테이블을 Entity(기본) 과 Relationship (유도) 테이블로 구분하는 방식이다. <br>
> 예를 들어 교수table과 학생table이 있을 때 둘 사이를 이어주는 수업 (유도) table이 있다.

* ## 스키마 (Schema)
    * DB, 테이블 정의 내역을 말한다.
* ## SQL Query
    * 관계형 DBMS를 사용하는 전용 언어 (interpreter language)
* ## Primary Key :PK
    * 테이블에서 하나의 레코드를 지정할 수 있는 하나 이상의 컬럼집합<br> 주민등록번호같은?

## ★ 의문점! Row와 record 차이점은 뭔가?★

|파일시스템|데이터베이스 모델링|관계형 데이터베이스|
|------|---|---|
|파일(file)|엔티티(Entity)|테이블(table)|
|레코드(record)|튜플(Tuple)|행(row)|
|키(key)|유일값(identifier)|기본키(Primary key), unique|
|필드(field)|어트리뷰트(attribute)|컬럼(column)|

파일 구조 - 레코드는 필드의 집합을 의미한다. 예를 들면,
Person 클래스에 대한 하나의 레코드는 id, name, age, job으로 표현되는 4개의 필드로 구성된다. 

테이블 관계형 데이터 베이스 - 로우는 컬럼의 집합이라고 볼 수 있다.<br>
ex) &nbsp; row1 = [컬럼 1-1, 컬럼 2-1 ,컬럼 3-1]

이 row 들 하나하나에 지정할 수 있는 것이 Primary-Key 이다.
테이블에도 PK 가 있다.

|     | 컬럼 1 | 컬럼 2 | 컬럼 3 |
|-----|--------|--------|--------|
|row1 | 컬럼 1-1 | 컬럼 2-1| 컬럼 3-1 |
|row2| 컬럼 1-2 | 컬럼 2-2| 컬럼 3-2 |
|row3 | 컬럼 1-3 | 컬럼 2-3| 컬럼 3-3 |

### Row 와 record는 비슷한 의미지만 형태에 따라 다르게 적용된다.

