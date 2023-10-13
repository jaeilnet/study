[문제](https://www.typescriptlang.org/play?#code/PQKgUABBCMAcCcEC0ECCB3AhgSwC4FMATSZJM8kgIwE8IBZTAY23wCsIBlbAawHsAnTBAAUAAQC2TFqwDOPAZgCUEAMSAbIcADY6oAO-XuOwz8qygFdsAG1xJsAOzAkVTiIAnJwBzdDqAAU9Bo4AExiEBMGsABcYhAAYXAUPHABdGIQAQawA+hwA9xiMjAF3GIQAjxwBFxiEAZVoAaCEAJUdjElKiMwBZuwHHRpMAByYhAFtHAbtbAGJqIQBlRiEAMIazswBk6wBSxgH5PCEAIMcAdoYAuCEATlqaIAAMffUN8AB4AUQAPTHFtC3wAFWptfAA+ZYyc-KLlvYOj0-P8ZdzWjsBu0dy+nOGYxIyxBuBkJFwbwgT0OxzOFwgAF4IGs-FsZLh+HYAOaXcaQhEAJXwMlMViR9GoGBwBEIO32sNeF0uEGAwAgGKxtmxwJB4xZgBzZwAZM3MANoCbDYuyYCwQTD8XDYRjHAC6wgAFrhcNoZDM2YR8AA3AB0uF4wEkjDkfEEwEwhENmFsjCISAJJMYWO01nwu3w-GYRhkSAAjqYSYreLYkNAkAAWACs3DjyhoEFFEikbGtCjVmu1urZUtw6tMlGNjH0FqzsnkgkU-IgAHE8AAJMvRQA4gxBAC89gAY6ub5nV64Bgxjq42yY0CbHAODwYB8MAgYAOUAQAD6W+3O+3EEAN6N92KAFXnADstEEigFIOze728biArhzuynUvBETYnCC+gi2QgyFG+BsAAyPBbE61CXCyyKft++C-v+qLAaBmx2AAZv6EAAKosiMWFfrsP5-gB6xGCB3BgbYEEQLhdBUlgb50thEBzJhzEQLYRr+gA3GuIA3neO4QIAMouACVDgAdSxAgAA82kIn8QJW4Pqu2CHAIuAQM+ADe0JhjKRR7BcjBqQAvhAqG+BAADkojukg44ysc3IksApiKhYMgWU+UIABoUohRibJyOJ4s+ACavmAf5WmoSwFiEHMtimOIlAYUZwVQgAWuFJFbH56KYjiEAAD7sYlyX8JBYDPul0BZWimy5fVEV5Vy2JFRAlC8LwxxOpBaUIp+yJaSWcFzMIUaoWS0UWMccUiPK2LxaV-rKIiLLgSta2URARmeQijCYEGFKiiQ+n4IZOw6RYmy0a+tKbF5lxFIF3KQQUJ27AZuAXaYMrXXRNLviFj0QFFMWzQlSUpa972fd9v03fRd3pcDz2tcVENldDUCned2yXX9t3vtVKP5dybUdV1+A9Y9MNnV9eM-VdCMA3SJzAxj-rQyqa7stZwa+p9SD+no-CVVCwsCBSzMMZsHPlbxcnyRAgAnTYAMuMQIAF02ACM1isCYpYCgCQLKAKgTgCvTRAgCvNYABOOABqrA4QEOhajjI46TjI078LO852rYMjoP6i68EbEBm729uOyOY4TlOM5zggwAyF1LnYFG4JQCyyuAB6dEBuIAOBPzIOWrDmyUdux7s5Lo+QA) [해설](https://ghaiklor.github.io/type-challenges-solutions/ko/easy-awaited.html)

- Prmoise 로 들어온 타입을 Promise 가 해제 된 타입으로 변환하는 문제

---

1. Prmoise 타입이 아닐 경우에는 에러가 발생해야 하기 때문에 제네릭 타입에 extends 키워드로 조건부 타입을 부여합니다.

```ts
T extends PrmoiseLike<any>
```

2. PromiseLike 파라미터를 알아야합니다. 그렇기 떄문에 파라미터의 타입추론 하는 키워드인 infer 을 사용합니다.

3. infer U 타입도 Prmoise 타입일수 있으니 U 에 대해서도 PrmoiseLike 타입일 경우

## 답

```ts
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
    ? MyAwaited<U>
    : U
  : never;
```
