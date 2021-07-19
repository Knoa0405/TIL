# 안드로이드 레이아웃과 manifest

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