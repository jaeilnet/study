# 정규표현식(RegExp)

<br>

정규식, Regular Expression
<br>
<br>

---

<br>

## 역할

- 문자 검색(search)
- 문자 대체(replace)
- 문자 추출(extract)
  <br><br>

---

<br>

## 테스트 사이트

https://regexr.com/
<br><br>

---

<br>

## 정규식 생성

<br>

```js
//생성자
new RegExp('표현', '옵션')
new RegExp('[a-z]', 'gi)

//리터럴
/표현/옵션
/[a-z]/gi
```

<br>

---

<br>

## 자주 사용하는 메소드

<br>

|   메소드   | 문법                               | 설명                                                              |
| :--------: | :--------------------------------- | :---------------------------------------------------------------- |
|   `test`   | `정규식.test(문자열)`              | 일치여부를 Boolean 값으로 반환                                    |
|  `match`   | `문자열.match(정규식)`             | 일치하는 문자열을 Array 값으로 반환                               |
| `replace`  | `문자열.replace(정규식, 대체문자)` | 일치하는 문자열을 대체하고 대체된 문자열을 반환                   |
|   `exec`   | `정규식.exec(문자열)`              | 일치하는 하나의 정보(Array) 반환                                  |
|  `split`   | `문자열.split(정규식)`             | 일치하는 문자열을 분할하여 Array 값으로 반환                      |
|  `search`  | `문자열.search(정규식)`            | 일치하는 문자열의 인덱스(Number) 값으로 반환                      |
| `toString` | `생성자_정규식.toString()`         | 생성자 함수 방식의 정규식을 리터럴 방식의 문자열(String)으로 반환 |

<br>
>위 3개의 메소드( `test`, `match`, `replace` ) 가 가장 자주 쓰임

<br>

---

<br>

## 메소드 활용 예제

<br>

```js
const str = `
010-1234-5678
thetodayisfighting@coding.com
https://omdbapi.com/?apikey=7035c60c&s=frozen
THE quick brown fox jumps over the lazy dog.
abbcccdddd
`;
// 생성자 방식

const regexp = new RegExp("the", "g"); // ["the", "the"] "g는 전역을 의미"
console.log(str.match(regexp));

const regexp = new RegExp("the", "gi"); //  ["the", "THE", "the"] "i는 대소문자 구별하지 않겠다" 를 의미
console.log(str.match(regexp));

//리터럴 방식

const regexp = /the/gi; // ["the", "THE", "the"]
console.log(str.match(regexp));
```

---

<br>

## 플래그(옵션)

<br>

| 플래그 | 설명                                              |
| ------ | ------------------------------------------------- |
| `g`    | 모든 문자열 일치(global)                          |
| `i`    | 영어 대소문자를 구분 않고 일치(ignore case)       |
| `m`    | 각각의 줄을 하나의 시작과 끝으로 보기(multi line) |

|

<br>

## 플래그 옵션 예제

<br>

```js
const str = `
010-1234-5678
thetodayisfighting@coding.com
https://omdbapi.com/?apikey=7035c60c&s=frozen.
THE quick brown fox jumps over the lazy dog.
abbcccdddd.
`;
console.log(str.match(/\./gim)); // [".", ".", ".", ".", "."] 문장 전체에서 .를 찾는다.
console.log(str.match(/\.$/gim)); // [".", ".", "."]

// '$' 문장의 끝 부분만 확인한다.

// `/` 이스케이프의 활용
// . 이라는 기호가 원래는 어떠한 기능으로 쓰이는데,
// 단순히 기능이 아닌 문자로만 검색하기 위해 이스케이프라는 `\` 를 넣어주어 문자로 인식되게 한다.
```

> `첫번째 출력 :` 문장 전체에서 `.` 이라는 문자의 갯수를 배열(Array) 로 반환<br>
> `두번째 출력 :` `$` 기능을 활용하여 문장 끝 부분에 `.`을 확인하여 문자의 갯수를 배열(Array)로 반환<br>
> <br>
> `g/i/m 같이 사용 시 문자 전체에서의 줄 바꿈이 되는 단 마다의 확인한다.`

<br>

---

<br>

## 패턴(표현)\_1

<br>

| 패턴       | 설명                           |
| ---------- | ------------------------------ |
| `^ab`      | 줄(Line) 시작에 있는 ab와 일치 |
| `ab$`      | 줄(Line) 끝에 있는 ab와 일치   |
| `.`        | 임의의 한 문자와 일치          |
| a&verbar;b | a 또는 b와 일치                |
| `ab?`      | b 가 없거나 b 와 일치          |
| `{3}`      | 3개 연속 일치                  |
| `{3,}`     | 3개 이상 연속 일치             |
| `{3,5}`    | 3개~5개 연속 일치              |

|

<br>

## 패턴(표현) 예제\_1

<br>

```js
const str = `
010-1234-5678
thetodayisfighting@coding.com
https://omdbapi.com/?apikey=7035c60c&s=frozen.
THE quick brown fox jumps over the lazy dog.
abbcccdddd.
`;
console.log(str.match(/^t/gim)); //["t", "T"]

console.log(str.match(/m$/gim)); //["m"]

console.log(str.match(/./g));

//["0", "1", "0", ....] 공백과 특수문자 포함 모든 문자를 배열로 반환

console.log(str.match(/c.../g));

//["cod", "com", "com", "c60", "c&s", "ck ", "ccc"] c로 시작 하는 문자 중 3자리까지 출력

console.log(str.match(/c.../g));

// ["codi", "com/", "c60c", "ck b", "cccd"] c로 시작하는 문자 중 4자리까지 출력

console.log(str.match(/t.e/gi));

// ["the", "THE", "the"] t로 시작해서 e 로 끝나는 문자 중 출력 (대소문자 구별 안함)

console.log(str.match(/d{2}/));

// ["dd", "dd"]d가 2번 연속되면 모두 출력

console.log(str.match(/d{2,3}/));

// ["ddd"] d가 연속적으로 2개이상 3개이하 모두 출력

console.log(str.match(/\w{2,3}/g));

// \w 숫자를 포함한 영어 알파벳을 의미함.
// ["010", "123", "567", ...] 숫자와 알파벳을 포함하는 모든 문자를 2~3 단어들을 출력

console.log(str.match(/\b\w{2,3}\b/g));

//["010", "com", "www", "com", "THE", "fox", "the", "dog"]
// \b 블럭 같은 역할,
//길이가 2에서 3인 문자 양 옆에 공백을 포함한 특수문자(문자열이 아닌 형태)가 있으면 그것을 배열로 반환.
```

<br>

---

<br>

## 패턴(표현)\_2

<br>

| 패턴      | 설명                                             |
| --------- | ------------------------------------------------ |
| `[abc]`   | `a` 또는 `b` 또는 `c`                            |
| `[a-z]`   | `a`부터 `z` 사이의 문자 구간에 일치(영어 소문자) |
| `[A-Z]`   | `A`부터 `Z` 사이의 문자 구간에 일치(영어 대문자) |
| `[0-9]`   | `0`부터 `9` 사이의 문자 구간에 일치(숫자)        |
| `[가-힣]` | `가` 부터 `힣` 사이의 문자 구간에 일치(한글)     |

|

<br>

## 패턴(표현)예제\_2

<br>

```js
const str = `
010-1234-5678
thetodayisfighting@coding.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen.
THE quick brown fox jumps over the lazy dog.
abbcccdddd.
`;
console.log(str.match(/[fox]/g));

// ["o", "f", "o", "o", "o", "o", "f", "o", "o", "f", "o", "x", "o", "o"]
// f 또는 o 또는 x 문자 반환

console.log(str.match(/[0-9]/g));

//  ["0", "1", "0", "1", "2", "3", "4", "5", "6", "7", "8", "7", "0", "3", "5", "6", "0"]
// 0 부터 9까지의 모든 숫자 data를 반환

console.log(str.match(/[0-9]{1,2}/g));

// ["01", "0", "12", "34", "56", "78", "70", "35", "60"]
// 0부터 9까지의 모든 숫자 중 1개이상이고 2개이하 모든 숫자 반환

console.log(str.match(/[가-힣]{1,2}/g));

//["동해", "물과", "백두", "산이"]
// 한글 `가` - `힣` 까지의 모든 한글 중 1개이상 2개이하의 글자를 모두 반환
```

<br>

---

<br>

## 패턴(표현)

<br>

| 패턴    | 설명                                                         |
| ------- | ------------------------------------------------------------ |
| `\w`    | 63개 문자(`word`, 대소문자 52개, 숫자 10개 + \_)에 일치      |
| `\b`    | 63개 문자에 일치하지 않는 문자 경계(`Boundary`) <`특수문자`> |
| `\d`    | 숫자 (`Digit`)에 일치                                        |
| `\s`    | 공백(`space`, tab 등)에 일치                                 |
| `(?=)`  | 앞쪽 일치(Lookahead)                                         |
| `(?<=)` | 뒤쪽 일치(Lookbehind)                                        |

|

<br>

## 패턴(표현)예제\_3

<br>

```js
const str = `
010-1234-5678
thetodayisfighting@coding.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen.
THE quick brown fox jumps over the lazy dog.
abbcccdddd.
동해물과_백두산이
`;
console.log(str.match(/\w/g));

//["0", "1", "0", ...]

console.log(str.match(/\bf\w{1,}\b/g));

//  ["frozen", "fox"]
// 소문자 f로 시작하는 영 단어를 모두 찾아서 배열로 반환

console.log(str.match(/\d{1,}/g));

// ["010", "1234", "5678", "7035", "60"]
// 숫자 덩어리들만 배열로 반환

console.log(str.match(/\s{1,}/g));

// ["\n", "\n", "\n", "\n", " ",...]
// 줄 바꿈을 포함한 모든 공백을 배열로 반환함

// `\s` 활용하기

const h = `  the hello  world   !

`;
console.log(h.replace(/\s/g, ""));

// thehelloworld!
// 공백과 줄 바꿈, TAP 키를 빈 문자열로 replace(대체) 한다.

console.log(str.match(/.{1,}(?=@)/g));

// ["thetodayisfighting"]
// 임의의 하나의 문자인 . 와 1개이상의 문자 그리고 (?=@) @를 기준으로 앞 문자를 배열로 반환

console.log(str.match(/(?<=@).{1,}/g));

// ["coding.com"]
// @를 기준으로 뒤쪽 문자열을 배열로 반환
// 패턴도 뒤쪽에 작성 되어야 한다.
```

---
