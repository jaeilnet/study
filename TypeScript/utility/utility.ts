// 전역변수
declare const global = "sth";

// Partial
// 파셜(Partial) 타입은 특정 타입의 부분 집합을 만족하는 타입을 정의할 수 있습니다.

interface Address {
  email: string;
  address: string;
}

type MayHaveEmail = Partial<Address>;
const me: MayHaveEmail = {}; // 가능
const you: MayHaveEmail = { email: "test@abc.com" }; // 가능
const all: MayHaveEmail = { email: "capt@hero.com", address: "Pangyo" }; // 가능

// Pick
// 픽(Pick) 타입은 특정 타입에서 몇 개의 속성을 선택(pick)하여 타입을 정의할 수 있습니다.

interface Hero {
  name: string;
  skill: string;
}
const human: Pick<Hero, "name"> = {
  name: "스킬이 없는 사람",
};

type HasThen<T> = Pick<Promise<T>, "then" | "catch">;
let hasThen: HasThen<number> = Promise.resolve(4);
// hasThen.th; // 위에서 'then'만 선택하면 'then'만 제공, 'catch' 선택하면 'catch만 제공'

// Omit
// 오밋(Omit) 타입은 특정 타입에서 지정된 속성만 제거한 타입을 정의해 줍니다

interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}
const phoneBook: Omit<AddressBook, "address"> = {
  name: "재택근무",
  phone: 12342223333,
  company: "내 방",
};
const chingtao: Omit<AddressBook, "address" | "company"> = {
  name: "중국집",
  phone: 44455557777,
};
