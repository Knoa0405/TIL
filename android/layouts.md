### View ( Button / TextBox / Image )

⇒ 화면을 구성하는 구성 요소

### View Group ( View Container )

⇒ 화면에 배치할 수 있는 무언가 필요하다 ( 그 역할을 하는 것 )

연관된 여러 개의 View 포함 할 수 있다.

1개의 View 는 반드시 하나의 View Group 에 포함되어야 한다.

### 안드로이드에서는 View Group 을 상속 받는 여러가지 Layout 클래스를 제공한다.

## Linear Layout

⇒ 안드로이드에서 제공하는 다양한 Layout 에 대해 알아본다.

Linear Layout View를 수평 / 수직 방향으로 배치할 수 있는 레이아웃이다.

orientation 속성을 통해 배치 방향을 결정할 수 있다.

android : orientation = "vertical" : 하위 뷰들을 수직방향으로 배치

android : orientation = "horiziontal" : 하위 뷰들을 수직방향으로 배치

gravity 속성과 layout_gravity

⇒ 모든 하위 뷰에 대한 중력 방향 ( 배치 방향 ) 을 결정한다.

layout_gravity 속성은 해당 Group View 에 속하는 하위 View 들이 가지는 속성으로 ViewGroup 의 Gravity 속성에 의해 결정된 원래 자기 자신의 위치에서의 중력 방향을 결정하는 속성이다.

[https://lktprogrammer.tistory.com/132](https://lktprogrammer.tistory.com/132)

baselineAligned : 크기가 다른 위젯들을 보기 좋게 정렬하여  true, false 값을 가진다.

layout_weight : linear layout 이 여러 개 일때 가중치로 각 레이아웃의 크기를 지정한다.

Linear layout, grid layout 일 때만 먹힌다.

 

### Relative Layout ( 상대적인 뷰 )

형제 뷰 기준

android:id="@+id/textA"

android:l**ayout_toRightOf**="@id/textA" textA 요소 기준으로 오른쪽에 배치

부모 뷰 기준 

android:layout_align**Parent**Left

[https://recipes4dev.tistory.com/126](https://recipes4dev.tistory.com/126)

### Constraint Layout

[https://medium.com/@futureofdev/android-constraintlayout-쉽게-알아가자-62d2ded79c17](https://medium.com/@futureofdev/android-constraintlayout-%EC%89%BD%EA%B2%8C-%EC%95%8C%EC%95%84%EA%B0%80%EC%9E%90-62d2ded79c17)

[https://academy.realm.io/kr/posts/constraintlayout-it-can-do-what-now/](https://academy.realm.io/kr/posts/constraintlayout-it-can-do-what-now/)

### 컨테이너 높이 ⇒ Wrap Content 설정

### Table Layout

⇒ span 기능이 없다?

좌우로 합치는 것만 된다.

row 개념으로 생각하면 된다.

<TableRow> 태그를 사용하는데 개수가 행의 개수가 된다.

열의 개수는 이 안에 포함된 위젯의 개수로 결정된다.

첫번째 셀은 0부터 시작한다.

layout_column :  지정된 열에 현재 위젯 표시

stretchColumns : 지정된 열의 폭을 늘린다.

stretchColumns : "*" : 각 셀을 같은 크기로 확장, 전체 화면 꽉 채움

### Grid Layout

⇒ 

**rowCount**

행 개수

**columnCount**

열 개수

**orientation**

: 방향 우선

**layout_row**

: 자신이 위치할 행 번호 (0부터 시작)

**layout_column**

: 자신이 위치할 열 번호 (0부터)

**layout_rowSpan**

: 행을 지정된 개수만큼 확장

**layout_columnSpan**

: 열을 지정된 개수만큼 확장

**layout_gravity**

: fill, fill_vertical, foll_horizontal. 셀 확장 시 위젯을 확장된 셀에 꽉 채우는 효과

### Frame Layout

탭 위젯 등과 혼용해 사용할 때 유용. html의 z-index처럼 순서를 잘 조절해서 사용한다. visibility를 이용해서 조절한다.

**foreground**

: 전경 이미지

**foregroundGravity**

: 전경 이미지의 위치