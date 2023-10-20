[문제](https://www.typescriptlang.org/play?#code/PQKgUABBCMAcEFoIBkCmA7A5gFwBYQHsAzCAFQFcAHAG1UkQUafoCMBPCAZwEt0CD0EABQABHnwEBKCAGJANkOABsdnYqtMPRmaIgCcnAHN3qogBh7AL6NDAOUuAYVcmARcYiBsHsAioxEAcdYBdxwD6dEQBg9gDTXAGquAKU0QgDgTgCSNgLWdEAAGaFh4ADykAHxRnoA2tYAga36AHIOAKWMAdAYQgBBjgDtDAFxFUdXYnPTYbJSoENionNQAhhAAvBAA2gDkre0dAwA0EAMAtgQAJqjUEADM45Mz84sAGqvTcwsQAJoDALr1jc2clB0AxqibPf0DAGIAgsgAwgDyAHIQAJw7V4fH4QAASAFEXgA1I4TAYAEQASi8AOI-HYAZVIL0RGNBAEkAAo7UEAVQAsi9fhjCS93uCnsh8SjQaQTkUGk0Wm1OrEcPhenyEsNOkkoMBgBBUAAPJrXVqzCAAFjOXMuNzuQoFKAw-Pi6tumzFEqlstQ8tQioArPRqlEimKUdxsKDyCxAAujgBxBiCAF57AAx15QguGw2EonHKEtq11w+QAVpx8gQAE6YYBwYAAawIYBAwHUoAgAH1iyXSyWIIAb0b97oggBV5wA7LRBAKHjgFIOotljuFiC59Sc5paxKm1roWacCBJ1AdWYCagccjoDN8ADu6D6xzFvVIg1ocVw7LABc7HYggBlFwAlQ4AOpYggAB51xn9tH8s97hTSjJ7Atc4QADeEHBAEdyA6agJnBM15QgABfCAiCTAgpkmEQ+wQaNgJ3TA2mAchsG4ahOAGdRrgETgPxFLpekGMidnWfYVjhGitmovZFiOY4IA6MciPQEiwC4kiuCuQ0HkGIEvl+AE4VEkEIWhWFJiRVF0ThLEcTxIkSQpKkIBpOkGSZFk2TYjiID47Bey-a4OLaYT6DAuVsHiACgOoeIBz7YhuRGJIJiVJJvNs8CHKc4DXN1YVzg8g07m8iArT8sZ6BNJDOAQGV7NSpM4KTegBzihLxUlZLUsCjKspysLcHiAZcAWagCAgJdk2oWYBn804DxAB9Hy7QATpsAGXGIEAC6bABGarrH27PNQHoMVAFQJwBXpogQBXmsAAnG-ADIMQzDCNgCjGN40TFM01gYAOm4pdUCTTNsygWaFv9QNg1DcNI04aM4wTZNU3TTgCGobDuGI6aIB6wAPTogXRgkAE5aHs256dtevaPsOrMczzIA)

- 배열의 길이를 구하는 타입 구현하기

---

내 답과 해답이 갈린 문제

문제에서 튜플의 배열을 받는다고해서 unknown[] 을 제네릭이 받게 했는데
해답에서는 length 프로퍼티를 체크했다.

```ts
// - 내가 푼 답
type Length<T extends readonly unknown[]> = T["length"];

// - 제공해준 해답
type Length<T extends { length: number }> = T["length"];
```

제공해준 해답에서는 length 프로퍼티를 체크하기 때문에 상수 likeArr 의 string 도 유사배열로 length 를 갖기때문에 에러는 나지않지만 length 의 숫자가 아닌 number type 을 추론하고 있다.

내가 푼 답에서는 오로지 튜플타입의 배열만 제네릭으로 받고있기 때문에 string 의 유사배열은 타입에러를 발생시킨다.

likeArr2 의 상수로 string 을 이제 전개연산자로 전개시켜서 string[] 을 만들어봤다.
결론적으로 이 부분도 숫자타입을 리턴했지 length 값을 리턴하지 않았다.

```ts
type LikeArrType<T extends { length: number }> = T["length"];
type ArrType<T extends readonly unknown[]> = T["length"];

const likeArr = "readonly" as const;
const likeArr2 = [..."readonly"] as const;

const arr = ["123", "12322", "111"] as const;

const number: LikeArrType<typeof likeArr> = 2123; // return number type
const number: LikeArrType<typeof likeArr2> = 2123; // return number type
const number1: LikeArrType<typeof arr> = 3;

// const number11:ArrType<typeof likeArr> = 123 // error
const number11: ArrType<typeof likeArr2> = 123; // return number type
const number2: ArrType<typeof arr> = 3;
```
