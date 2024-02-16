// 여러 요소들로 이루어져있는 집합체

import Iterator from "./Iterator";

interface Aggregator<T> {
  getListIterator(): Iterator<T>;
}

export default Aggregator;
