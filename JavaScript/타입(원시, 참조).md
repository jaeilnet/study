### 자바스크립트 타입

1. 원시형 type (6개)
2. 참조형 type (3개)

> 원시형 타입(Primitive type)

### **특징**
변수에 할당이 될 때 메모리 상에 **고정된 크기로** 데이터 값을 보관하고, 값이 저장 된  메모리에 직접 접근한다.  
즉 변수에 새 값이 할당이 될 경우 변수에 할당 된 메모리 블럭에 저장된 값을 바로 변경한다.
```js
let name = jaeil
//jaeil 자체를 메모리에 저장
```
1. Boolean -> true / false
2. Null -> 존재하지 않다. 없다.
3. undefined -> 아직 할당되지 않았을 경우
4. Number -> 숫자 1, 2, 3, 4
 **BigInt** -> 말 그대로 엄청 큰 숫자 2^53-1의 범위
5. String -> 문자열 "가나다라"
6. Symbol -> 심볼 유일하고 변경 불가능한 기본 값
---
> 참조형 타입(Refernce type)
### **특징**
참조 타입의 데이터는 **크기가 정해져 있지 않고** 변수에 할당이 될 때 값이 **직접 해당 변수에 저장 될 수 없으며**(**원시형과의 차이**) 변수에는 데이터에 대한 참조만 저장된다.  
변수의 값이 저장 된 **힙 메모리의 주소 값을 저장한다.(간접저장)** 
변수가 가지고 있는 **메모리 주소를 이용해서 변수의 값에 접근한다.(원시형과의 차이 간접접근)**
1. Object -> {key : value}
2. Array -> [1, 2, 3, 4]
3. Function -> function abc(){}
4. class -> class abc {}
---
#### **참조 타입 간단한 예제**
```js
const list1 = [1, 2, 3]
const list2 = [1, 2, 3]

cosole.log(list1 === list2) 
//false
// 실제 같은 배열이지만 각자 메모리 위치가 다르기 때문에 false가 출력 됨


const list3 = [1, 2, 3]
const list4 = list3

console.log(list3 === list4)
// true
// list3 의 메모리 주소를 그대로 사용하여 list4에 옮겨놓았기 때문에 true가 출력 됨
```

