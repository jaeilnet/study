# Exclude<UnionType, ExcludedMembers>

- UnionType 에 할당할 수 있는 모든 공용 구조체 멤버를 제외하여 형식을 구성합니다.

예시)

```ts
type T0 = Exclude<"a" | "b" | "c", "a">;
```
