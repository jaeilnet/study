# 반복자패턴

하나씩 지정해서 순서대로 처리하는 패턴
Iterator는 무언가를 반복한다는 의미를 가지고있다.

![UML 다이어그램](https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Iterator_UML_class_diagram.svg/1024px-Iterator_UML_class_diagram.svg.png)

UML 클래스 다이어그램

- Iterator 반복자 클래스는 next(), hasNext() 와 같은 프로퍼티를 가진다.

- next() 프로퍼티는 current()와 같은 다른 프로퍼티로 대체 가능하지만 hasNext() 는 항상 boolean 값으로 다음 프로퍼티가 있는지를 체크해줘야하므로 필수 프로퍼티이다.

- Aggregate 라는 집합체가 Iterator 를 생성한다.

- ConcreteAggregate 는 구체적인 집합체라는 뜻으로 아이템 클래스다. Iterator 를 생성해줘야한다.

- ConcreteIterator 는 구체적인 반복자라는 뜻으로 Iterator 속성을 가진다. 실제로 리스트들을 순서대로 반환하는 클래스이다.

---

## **예제**

### Iterator

집합체의 요소들을 순서대로 검색하기 위한 인터페이스

```js
interface Iterator<T> {
  next(): boolean;
  current(): T;
}

export default Iterator;
```

### Aggregator 집합체

```js
interface Aggregator<T> {
  iterator(): Iterator<T>;
}
```

### ConcreteAggregate 구체적인 집합체

```js
class Array implements Aggregator<Item> {
  private items: Item[];

  constructor(items: Item[]) {
    this.items = items;
  }

  public getItem(index: number) {
    return this.items[index];
  }

  public get count() {
    return this.items.length;
  }

  iterator(): Iterator<Item> {
    return new ArrayIterator(this);
  }
}
```

### ConcreteIterator 구체적인 반복자

```js

// 구체적인 반복자 역할
// 검색하기 위한 필수 정보를 가지고 있어야한다.
// ex) Iterator 으로부터 상속받은 next(), current()

class ArrayIterator implements Iterator<Item> {
  private array: Array;
  private index: number;

  constructor(array: Array) {
    this.array = array;
    this.index = -1;
  }

  next(): boolean {
    this.index++;
    return this.index < this.array.count;
  }
  current(): Item {
    return this.array.getItem(this.index);
  }
}
```
