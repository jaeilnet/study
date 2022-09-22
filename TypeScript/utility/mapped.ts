// 맵드 타입이란 기존에 정의되어 있는 타입을 새로운 타입으로 변환해 주는 문법을 의미합니다. 마치 자바스크립트 map() API 함수를 타입에 적용한 것과 같은 효과를 가집니다.

// Js

let arr = [
  { id: 1, title: "함수" },
  { id: 2, title: "변수" },
  { id: 3, title: "인자" },
];
let result = arr.map(function (item) {
  return item.title;
});
console.log(result); // ['함수', '변수', '인자'];

// Ts

type Heroes = "Hulk" | "Thor" | "Capt";

type HeroProfiles = { [K in Heroes]: number };
const heroInfo: HeroProfiles = {
  Hulk: 54,
  Thor: 1000,
  Capt: 33,
};

// for in 과 같다

// 실 예제_1

type Subset<T> = {
  [K in keyof T]?: T[K];
};

interface Person {
  age: number;
  name: string;
}

const ageOnly: Subset<Person> = { age: 23 };
const nameOnly: Subset<Person> = { name: "Tony" };
const ironman: Subset<Person> = { age: 23, name: "Tony" };
const empty: Subset<Person> = {};

// 실 예제_2

interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

function fetchUserProfile(): UserProfile {
  return {
    username: "",
    email: "",
    profilePhotoUrl: "",
  };
}

interface UserProfileUpdate {
  username?: string;
  email?: string;
  profilePhotoUrl?: string;
}

function updateUserProfile(params: UserProfileUpdate) {
  // ...
}

interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// 개선 1

// type UserProfileUpdate = {
//   username?: UserProfile["username"];
//   email?: UserProfile["email"];
//   profilePhotoUrl?: UserProfile["profilePhotoUrl"];
// };

// 개선 2

// type UserProfileUpdate = {
//   [p in keyof UserProfile]?: UserProfile[p];
// };
