[문제](https://www.typescriptlang.org/play?#code/PQKgUABBCMAsEFoIDECWAnAzgFwgewDMIBBddAQwE9JEE76aAjSkgO2wAs9WXkBXCAAoAAuXYE+ASggBiQDZDgAbHZ5MlTA0ZmiIAnJwBzd6qIAYewC+jgwDlLgGFXpAAwAq1wD6dEQNg9gEVGIgapmIgBbHAMYOANcYhAAYXAUPHAEXGIQAwewA01wA1VwBSmiEAcCcASRsBazohrNCxsAB5bAD5HCEAbWsAQNdjADkHAFLGAOgMIQAgxwB2hgC4G607sTBpsSgAHAFMIFXRoCABeCABtAHJyWYAaCFnGJZWAY1mAXV6B4dGAJkmZgGZlw+XoXb2hiA5B8gATcansnFzR6AKIYGAIQYADyGG2wgyeEGweAgjGG81mt2GD2exzeGA+Rx+fwBwMGoPBkOhsIgpxonWsDR+AHFUNgABJ8RiABdHADiDEEALz2ABjrWvdsNh+phWn9uhsOLUAFaYWp4dAAc2AcGAAGs8GAQMB1KAIAB9XV6-V6iCAG9HOUyIIAVecAOy0QEKAUg6dQbHdqIOr1H07u88rYcWDWE9MCMeNNtj8pt6gb7-TNthAAPwQViDABug3QEB5tmmAAYblqnY6IIAZRcAJUOADqWIIAAecALuPFh35w2u1AAW36Mtw7uGAG8IABRACOfHIABtlj3caCIABfCAEdB4JsrYQdhCi4dDwasWWDTDAPjYVBDzAIsAdiAbciYbcnaY0McgvL9wdD3Ke3LTc4QS4wEPLU4FAqLLe44PgOw4vuieTTII0gTD80CHB+3bkDyODoKgm5Tj+QgwXBCH-oBUB3niIFPuBORvlhiYpug+FAfeuSPmBr7THwfqDAQ6HglhrFPOxnFPLRNynqmc5YNeNDYkumAIEC94yWQMo0K+sysHg2CkBQlCzABEn-FJMnAfJolKRBuTdlmPLzKolAADKoEqgyzFOOm5iAdb1s6gAnTYAMuMQIAF02ACM17n1i6GqgDQPyAKgTgCvTRAgCvNYABOOxNyvL8oKwqYKKEpSjK8qKmImAAO6psqqpQFFsVcjyHB8gKQrACKYqStKcoKrAwCYHgQ57qg3A9OVECeYAHp0QLoSSACct1W1elDWZU1OWtSqaoakAA)

- 배열 T를 받아서 첫번째 타입을 반환하는 제네릭 T 를 구현하시오.

---

```ts
type First<T extends any[]> = T extends [] ? never : T[0];
```
