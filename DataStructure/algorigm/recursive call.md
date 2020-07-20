## 재귀 용법 (recursive call, 재귀 호출)

> 고급 정렬 알고리즘엥서 재귀 용법을 사용하므로, 고급 정렬 알고리즘을 익히기 전에 재귀 용법을 먼저 익히기로 합니다.


### 1. 재귀 용법 (recursive call, 재귀 호출)
* 함수 안에서 동일한 함수를 호출하는 형태
* 여러 알고리즘 작성시 사용되므로, 익숙해져야 함


### 예제
- 팩토리얼을 구하는 알고리즘을 Recursive Call 을 활용해서 알고리즘 작성하기


### 예제 - 분석하기

- 간단한 경우부터 생각해보기
  * 2! = 1 X 2
  * 3! = 1 X 2 X 3
  * 4! = 1 X 2 X 3 X 4 = 4 X 3!
- 규칙이 보임: n! = n X (n - 1)!
  1. 함수를 하나 만든다.
  2. 함수(n) 은 n > 1 이면 return n X 함수(n - 1)
  3. 함수(n) 은 n = 1 이면 return n
- 검증 (코드로 검증하지 않고, 직접 간단한 경우부터 대입해서 검증해야 함)
    1. 먼저 2! 부터 
     - 함수(2) 이면, 2 > 1 이므로 2 X 함수(1)
       - 함수(1) 은 1 이므로, return 2 X 1 = 2 맞다!
    2. 먼저 3! 부터 
     - 함수(3) 이면, 3 > 1 이므로 3 X 함수(2)
       - 함수(2) 는 결국 1번에 의해 2! 이므로, return 2 X 1 = 2 
       - 3 X 함수(2) = 3 X 2 = 3 X 2 X 1 = 6 맞다!
    3. 먼저 4! 부터 
     - 함수(4) 이면, 4 > 1 이므로 4 X 함수(3)
       - 함수(3) 은 결국 2번에 의해 3 X 2 X 1 = 6 
       - 4 X 함수(3) = 4 X 6 = 24 맞다! 

### 예제 - 코드 레벨로 적어보기

```python
def factorial(num):
if num > 1:
    return num * factorial(num - 1)
else:
    return num
```

```python
for num in range(10):
    print (factorial(num))
```

### 예제 - 시간 복잡도와 공간 복잡도
* factorial(n) 은 n - 1 번의 factorial() 함수를 호출해서, 곱셈을 함 
  - 일종의 n-1번 반복문을 호출한 것과 동일
  - factorial() 함수를 호출할 때마다, 지역변수 n 이 생성됨

* 시간 복잡도/공간 복잡도는 O(n-1) 이므로 결국, 둘 다 O(n)


### 3. 재귀 호출의 일반적인 형태

## 일반적인 형태1
```python
def function(입력):
    if 입력 > 일정값: # 입력이 일정 값 이상이면
        return function(입력 - 1) # 입력보다 작은 값
    else:
        return 일정값, 입력값, 또는 특정값 # 재귀 호출 종료
```
```python
def factorial(num):
    if num <= 1:
        return num

    return num * factorial(num - 1)
```
```python
for num in range(10):
    print (factorial(num))
```
```
< Result >
0
1
2
6
24
120
720
5040
40320
362880

```