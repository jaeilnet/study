function printName(name) {
  if (!name) {
    return "사람이 없네요";
  }

  return "안녕하세요" + name + "님";
}

console.log(printName("재일"));
