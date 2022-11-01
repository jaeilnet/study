## 타입추론

타입스크립트는 타입추론을 적극적으로 수행합니다.

타입추론은은 수동으로 명시해야하는 타입 구문의 수를 엄청나게 줄여주기 때문에 코드 전체적으로 안정성이 향상 됩니다.

타입스크립트 초보자와 숙련자는 타입 구문의 수에서 차이가 납니다.

숙련된 타입스크립트 개발자는 비교적 적은 수의 구문(중요한 부분만 사용)을 사용하고,

초보자의 코드는 불필요한 타입 구문으로 도배되어있을 겁니다.

### **추론 가능한 타입을 사용해 장황한 코드 방지하기**

변수를 선언할때마다 왠지 타입을 명시해야할 것 같지만

모든 변수에 타입을 선언하는 것은 비생산적이며 형편없는 스타일로 여겨집니다.

```ts
let x: number = 12;
let x = 12;
```

마우스를 올려보면 이미 number 로 추론되엉있기 때문에 굳이 number 를 명시 할 필요가 없습니다.

> (경험담, React.FC // 굳이 일일이 안해도 React.Fc 인거 함수 맨 앞이 대문자인거 보면 Hooks 인거 다 압니다.)

```ts
function square(nums: number[]) {
  return nums.map((x) => x * x);
}

const squares = square([1, 2, 3, 4]);
// type => number[]
```

타입이 추론되면 리팩토링 역시 용이해집니다.

`극단적`이긴한데 Product 인터페이스가 있음에도 변수마다 타입을 지정해줬다고 가정해봅니다.

**예제)**

```ts
interface Product {
  id: number;
  name: string;
  price: number;
}

function logProduct(product: Product) {
  const id: number = product.id;
  const name: string = product.name;
  const price: number = product.price;
  console.log(id, name, price);
}
```

id 는 number 으로 명시되어있는데 나중에 string 타입도 들어올수있다고 가정해봅니다.

그래서 logProduct 의 id 타입을 string 으로 변경하게되면 id 변수에 선언에 타입과 맞지 않게 됩니다.

```ts
// 비추
// 구조분해와 맞게 타입을 명시적으로 입력한 경우

function logProduct(product: Product) {
  const { id, name, price }: { id: number; name: string; price: number } =
    product;

  console.log(id, name, price);
}

// 깔끔하게 타입이 추론 됨

function logProduct(product: Product) {
  const { id, name, price } = product;

  console.log(id, name, price);
}
```

이상적인 타입스크립트 코드는 함수/메서드 시그니처에 타입 구문을 포함하지만,

`함수 내에서 생성 된 지역변수에는 타입 구문을 넣지않습니다.`

타입 구문을 생략하여 방해되는 것들을 최소화하고 코드를 읽는 사람이 구현 로직에 집중할 수 있게 하는 것이 좋습니다.

---

#### **매개변수 기본값이 있는 경우**

함수 매개변수에 타입 구문을 생략하는 경우도 간혹 있습니다.

예를들어 함수 매개변수에 기본 값이 있는 경우입니다.

```ts
function parseNumber(str: string, base = 10) {}
```

기본 값이 number 10 이 입력됬기 때문에 number 로 추론 됩니다.

보통 타입 정보가 있는 라이브러리에서 콜백 함수의 매개변수 타입은 자동으로 추론되기 때문에 타입 선언은 필요하지 않습니다.

#### 추론될 수 있음에도 타입을 명시하고 싶을 때

추론될 수 있음에도 타입을 명시하고 싶은 몇가지 상황이 있습니다.

1. 객체를 정의 할때 입니다.

   객체의 타입을 명시해주면 2장에서 배운 잉여속성체크(없는 속성을 걸러준다.) 와 오타를 방지할 수있습니다.

2. 비동기 함수의 반환 타입을 지정해줄 때

   async await 으로 비동기 함수를 작성했을 시 반환 타입이 Promise<any> 으로 의도된 반환 타입을 명시한다면 정확한 위치에 오류가 표시 됩니다.

3. 반환 타입을 명시한다면 함수에 대해 더욱 명확하게 알 수 있습니다.

타입을 미리 명시하는 방법은,
이미 입출력 타입이 명시되되어 있기 때문에 함수를 구현하기 전에 테스트를 먼저 작성하는 TDD와 비슷하다고 볼 수 있습니다.

---

요약

- 타입스크립트가 타입을 추론 할 수 있다면 타입 구문을 작성하지 않는게 좋습니다.
- 이상적인 경우 함수/메서드의 시그니처에는 타입 구문이 있지만, 함수 내의 지역 변수에는 타입 구문이 없습니다.
- 추론될 수 있는 경우라도 객체 리터럴과 함수 반환에는 타입 명시를 고려해야합니다. 이는 내부 구현의 오류가 사용자 코드 위치에 나타나는 것을 방지해줍니다.

---

## 다른 타입에는 다른 변수 사용하기

```ts
let id = "123-4-4-455";
id = 1234566;
```

타입을 number 로 재할당했지만 string 으로 추론되었습니다.

`변수의 값은 바뀔 수 있지만 그 타입은 보통 바뀌지 않는다`는 중요한 관점을 알 수 있습니다.

변수를 따로 두지 않고 union 타입으로 string | number 를 지정해줄수 있지만

id 를 사용해야한다면 값이 어떤 타입인지 확인해야하기 떄문에 다루기 어려울 수 있습니다.

---

## 타입 넓히기

```ts
interface Vector3 {
  x: number;
  y: number;
  z: number;
}

const x = "x";

let vec = { x: 10, y: 20, z: 30 };

function getComponents(vector: Vector3, axis: "x" | "y" | "z") {
  return vector[axis];
}

getComponents(vec, x); //err
```

let 으로 선언한 x 는 string 으로 추론되어서 err 를 발생시킨다.

const 로 선언한 x는 "x" 로 문자열 그대로 추론되어
