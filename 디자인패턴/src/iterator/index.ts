import Array from "./Array";
import Item from "./Item";
import Iterator from "./Iterator";

const item = [
  new Item("쿠쿠다스", 2500),
  new Item("새우깡", 2000),
  new Item("뺴뺴로", 1500),
  new Item("초코파이", 1000),
  new Item("오예스", 4500),
];

const array = new Array(item);
const list = array.getListIterator();

const renderHTML = (iter: Iterator<Item>) => {
  while (iter.next()) {
    const item = iter.current();

    const domItem = document.createElement("div");
    domItem.innerText = `${item.name} : ${item.cost}`;
    document.body.appendChild(domItem);

    domItem.classList.add("iterator-item");
  }
};

renderHTML(list);
