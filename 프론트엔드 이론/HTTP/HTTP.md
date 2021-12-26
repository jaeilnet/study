## HTTP

### **HTTP 란**?

HTTP(Hypertext Transfer Protocol) 입니다.

### **HTTP 프로토콜 이란?**

상호 간에 정의한 규칙을 의미하며 특정 기기 간에 데이터를 주고 받기 위해 정의

예를 들면 내가 이렇게 줄테니까 너는 이렇게 받을게 라는 통신 규칙입니다.

### **HTTP 프로토콜 특징**

### 1. HTTP Request & Response

HTTP ㅡ로토콜로 데이터를 주고 받기 위해서는 아래와 같이 요청(Requset)를 보내고 응답(Response)을 받아야 합니다.

![req,res](https://joshua1988.github.io/images/posts/web/http/request-response.png)

### 2. 비-연결성(Connectionless)

HTTP 1.0 기준으로 http는 연결을 유지하지 않는 모델

클라이언트가 서버에게 리소스를 요청 한 후에
 응답을 받으면 연결을 끊어버리는 특징이다. 연결을 유지하게 되면 서버에게 많은 부담을 줄 수 있기 때문에 상당히 많은 클라이언트에게 요청을 받는 웹 서버의 경우 응답을 처리 했으면 연결을 끊는다.

### 3. 무상태 프로토콜 (Stateless)

HTTP 에서 서버가 클라이언트의 상태를 보존하지 않는 무상태 프로토콜이다.

요청을 보내서 응답을 받았지만 서버는 요청을 기억하지 못한다.

장점 : 서버 확장성 높음(스켕리 아웃)

단점 : 클라이언트가 추가 데이터 전송

---
## URL(Uniform Resource Locators)

서버에 자원을 요청하기 위해 입력하는 영문주소
![URL](https://joshua1988.github.io/images/posts/web/http/url-structure.png)

음.. 어찌보면 도메인같죠? 저희가 흔히 도메인 주소하면 www.naver.com 을 생각합니다.

>URL는 그러면 DNS = DomainName 과 뭐가 다를까요?

![도메인](https://s3-ap-northeast-2.amazonaws.com/opentutorials-user-file/course/3793/11167.png)

네 도메인은 URL의 일부로 naver 을 이야기합니다.

구조를 보시면 
* https 프로토콜
* search 서브도메인
* naver DNS
* com 최상위 도메인(TLD)
* search.naver 경로 및 파일명
* ?query=카카오 + api 쿼리스트링(쿼리는 예를 들어 ?id=1 이런식으로도 사용)
---
## HTTP 요청메서드

앞에서 본 url을 이용하여 서버에 특정 데이터를 요청 할 수 있습니다. 여기서 요청하는 데이터에 특정 동작을 수행하고 싶다면 http 요청 메서드 (Http Request Methods)를 이용합니다.

일반적으로 HTTP 요청 메서드는 HTTP verbs 라고도 불리우며 아래와 같이 주요 메서드를 갖고 있습니다.

* GET : 자원에 대한 **요청/조회**
* POST : 새로운 자원을 **생성**
* PUT : 자원에 대한 **수정/변경**
* Delete : 자원에 대한 **삭제**
이외에도 Patch : Put 과 비슷하지만 일부만 수정하는 메서드가 잇습니다.
---
## HTTP 상태 코드

서버가 클라이언트에게 요청을 받으면 응답상태에 따라서 다른 상태코드를 클라이언트에게 돌려줍니다.

코드는 100번대부터 500번대까지 있지만
주요 상태코드는 200(성공) ~ 500(서버오류)까지 있습니다.

* 1xx (요청에 대한 정보) - 요청을 받았으면 작업을 계속한다.

* 2xx - 성공
  * 200번대의 상태코드는 대부분 성공을 의미 합니다.

* 3xx - 리다이렉션
  * 300번대의 상태코드는 대부분 클라이언트가 이전 주소로 데이터를 요청하여 서버에서 새로운 url로 리다이렉트를 유도하는 경우입니다.

* 4XX - 클라이언트 에러
  *  400번대는 보통 클라이언트의 코드가 잘못 된 경우입니다. 잘못 된 URL에 요청을 했거나(404), 권한이 없는 요청(Ahthorization) 헤더가 잘못되거나 등등 입니다.

* 5xx - 서버에러
  *  500번대 상태코드는 서버쪽에서 오류가 난 경우입니다.
---
## 헤더(Header)
![헤더](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FY9FVZ%2FbtqKxk03h39%2FXXb8ovXh9wpnHXNXS5ExRk%2Fimg.png)

HTTP 요청시에 Haeder는 요청을 주고 받을 때, **기본적으로 담겨 있는 필수 정보** 또는

클라이언트와 서버가 요청 또는 응답으로 **부가적인 정보**를 전송하는 것

헷갈리실 것이다. 필수랫다가 부가적이랫다가..

자 Header에는 뭐가 들어 있는지 보도록 합니다.

>### Header 종류

1. General Header(공통 헤더)
2. **Request Header(요청 헤더)**
3. **Response Header(응답 헤더)**
4. Entity Header(엔티티 헤더)

**프론트엔드가 보기엔 저 2,3 번만 알면 될 듯 합니다.**

> Request Header (요청 헤더)

**HTTP 요청에서 사용 되고**, 메세지의 켄텐츠와 관련이 없는 패치 될 리소스나 클라이언트 자체에 대한 자세한 정보를 포함 하는 헤더
> Resoponse Header (응답 헤더)

위치 또는 서버 자체에 대한 정보(이름, 버전)과 같이 **응답에 대한 부가적인 정보**를 갖는 헤더

---
## Header 구성
헤더 이외에도 HTTP 메세지(요청과 응답)에 담겨 보내는 데이터의 형식을 알려주는 **Content-Type**과 데이터 처리를 알려줄 **Accept** 과 인증 토큰을 보낼 때 쓰이는 **Authorization** 등등이 있다. 

## 다시 살펴보는 HTTP 요청과 응답
![정리그림](https://joshua1988.github.io/images/posts/web/http/http-full-structure.png)

어느정도 이해가 가시나요?