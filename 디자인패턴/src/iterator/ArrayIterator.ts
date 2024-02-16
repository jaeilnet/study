import Array from "./Array";
import Iterator from "./Iterator";
import Item from "./Item";

// Item 의 검색을 수행하는 클래스

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

export default ArrayIterator;
