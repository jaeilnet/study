// 집합체의 요소들을 순서대로 검색하기 위한 인터페이스

interface Iterator<T> {
  next(): boolean;
  current(): T;
}

export default Iterator;
