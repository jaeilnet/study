# 타입스크립트 이해관계

## **타입스크립트는 자바스크립트의 슈퍼셋이다?**

타입스크립트는 단순히 자바스크립트의 타입체커일까? 타입만 지적해주는 것이 아니라 문법적인 오류도 지적해준다.

### **타입스크립트는 독특한 언어이다?**

인터프리터(파이썬, 루비)로 실행되는 것도 아니고, 저수준 언어로 컴파일(자바, C)가 되는 것도 아니다. 또 고수준 언어인 자바스크립트로 컴파일 되며, 실행 역시 타입스크립트가 아닌 자바스크립트로 이루어진다.

### **고수준언어(고급언어)**

고수준 언어는 사람이 이해하기 쉽게 작성된 프로그램 언어이다.
고수준 언어는 인터프리터와 컴파일 둘 중 하나의 과정을 겪으면서 실행한다.

### **인터프리터**

`컴파일 하지 않고 한 줄씩 읽어들여 실행`하는 프로그램이다. ex) 자바스크립트

### **컴파일러**

`고수준 언어를 저수준언어(어셈블리와 같은 기계어)로 바꾸는` 언어 번역을 말한다. ex) 자바, C

### **인터프리터와 컴파일**

`일반적으로 인터프리티어는 컴파일러보다 느리다.`컴파일 과정이 만약에 크기가 크다면 시간이 오래걸릴수도 있다. 이 때문에 인터프리티어를 빠르게 테스트 해보고싶어 개발에 많이 쓰이곤 한다.

---

타입스크립트 타입 시스템은 자바스크립트의 런타임 이전에 문제를 미리 찾기를 바라며 런타임 동작을 '모델링' 합니다.

```typescript
const a = 1;
const b = "2";

console.log(a + b); // error
```

## **코드 생성과 타입이 관계없음을 이해하기**

타입스크립트 컴파일러는 두가지 역할을 수행합니다.

- 최신 타입스크립트/자바스크립트를 브라우저에서 동작 할 수 있도록 구버전의 자바스크립트로 트랜스파일 합니다.

- 코드의 타입 오류를 체크합니다.

두 방법은 서로 상관관계 없이 독립적입니다.

타입스크립트과 자바스크립트로 변환될 때 코드 내의 타입에는 여향을 주지 않고 자바스크립트 실행 시점에도 타입은 영향을 미치지 않습니다.

실제로 자바스크립트로 트랜스파일 과정에서 모든 인터페이스, 타입, 타입 구문은 그냥 제거됩니다.

`~~~ 은 형식만 참조하지만, 여기서는 값으로 사용되고 있습니다.` 라는 오류를 많이 보셨을텐데 실제로 타입스크립트의 타입을 타입체커로 사용하지 않고 값으로 사용 될 때 나오는 에러입니다.

예시)

```typescript
interface Square {
  width: number;
}

interface Rectangle extends Square {
  height: number;
}

type Shape = Square | Rectangle;

function calculate(shape: Shape) {
  if (shape instanceof Rectangle) {
    //error
  }
}
```

실제로 instanceof 는 런타임에서 유효한 코드이기 때문에 타입이 아닌 값으로써 추론되는 것입니다.

```typescript
function calculate(shape: Shape) {
  if ("height" in shape) {
    console.log(height);
  }
}
```

타입안에 해당 속성이 있는지 체크하는게 올바른 코드입니다.

타입 정보를 유지하는 또 다른 방법으로는 런타임에 접근 가능한 타입 정보를 명시적으로 저장하는 '태그' 기법이 있습니다.

```typescript
interface Square {
  width: number;
  kind: "square";
}

interface Rectangle extends Square {
  height: number;
  width: number;
  kind: "rectangle";
}

type Shape = Square | Rectangle;

function calculate(shape: Shape) {
  if (shape.kind === "rectangle") {
    console.log(shape.kind);
  }
}
```

태그 된 유니온의 예시입니다. 이 기법은 런타임에 타입 정보를 손쉽게 유지할 수 있기 때문에 흔히 볼 수 있습니다.

타입을 클래스로 만들면 타임과 값을 둘다 사용 할 수 있습니다.

```typescript
class Square {
  constructor(public width: number) {}
}

class Rectangle extends Square {
  constructor(public width: number, public height: number) {
    super(width);
  }
}

type Shape = Square | Rectangle;

function calculate(shape: Shape) {
  if (shape instanceof Rectangle) {
    console.log(shape); // type Rectangle
  }
}
```

instanceof 는 아까 위에서 런타임환경에서 동작하는 코드라서 타입이 값으로 사용되고 있다고 error 를 표시한 코드입니다.

interface 로 정의했던 Rectangle 은 에러를 띄우지만 클래스로 정의하면 타입과 값으로 모두 사용이 가능합니다.

### **타입 연산은 런타임에 영향을 주지 않습니다**

아래 코드는 string 이 들어온다해도 타입단언(as Number)을 통해 number 만 반환하기 때문에 오류를 발생키지도 아무런 영향을 주지 못합니다.

```typescript
function asNumber(val: number | string): number {
  return val as number;
}
```

수정 ----

```typescript
function asNumber(val: number | string): number {
  return typeof val === "string" ? Number(val) : val;
}
```

**런타임 타입은 선언 된 타입과 다를 수 있다**

**타입스크립트 타입은 런타임 성능에 영향을 주지 않는다.**

---

## **Any 타입 지양하기**

any 타입은 모든 타입을 허용한다는 의미가 아니라 타입스크립트의 타입체커를 무시하겠다는 의미가 됩니다. 비슷하지만 다른 의미로 unknown 가 있는데

`any 는 타입체커를 무시하지만 unknown 은 무엇이든 할당이 가능한 타입체커이다.`
any 는 타입을 무시하기 때문에 런타임 이전에 오류를 발견하지못해도 런타임에서 오류가 날 수 있지만 unknown 은 런타임 이전에 오류를 발견 할 수 있다.

타입이 무엇인지 모를때는 any 가 아닌 Unknown 을 사용하는 편이 나을것 같다.

```typescript
const abc = (a: any) => {
  a(); // 런타임시 에러
};

abc(1);

const bcd = (a: unknown) => {
  a(); // 컴파일 때 오류 검출
};

bcd(1);
```
