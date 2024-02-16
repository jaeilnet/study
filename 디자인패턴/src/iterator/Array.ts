import Aggregator from "./Aggregator";
import ArrayIterator from "./ArrayIterator";
import Iterator from "./Iterator";
import Item from "./Item";

// Aggregator 인터페이스 구현체

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

  getListIterator(): Iterator<Item> {
    return new ArrayIterator(this);
  }
}

export default Array;
