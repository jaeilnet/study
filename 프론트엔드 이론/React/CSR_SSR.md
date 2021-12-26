## **CSR 와 SSR**
---
CSR(SPA) vs SSR(MPA)

> CSR_SPA

* 단일 페이지로 구성된 웹 어플리케이션
* 화면 이동시에 필요한 데이터를 서버에서 새로운 HTML을 받는게 아니라 필요한 데이터만 서버로 부터 JSON으로 전달 받아 동적으로 렌더링 한다.

![CSR](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FzR9q4%2FbtqKZmRfmnr%2Ffef0KBkj2Z3N6rySkLwpjk%2Fimg.jpg)

> SSR_MPA
* 사용자가 페이지를 요청 할 때마다 HTML을 새로 파싱해서 보여주는 방식

![SSR](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fce63Ro%2FbtqKSWfFgqC%2FTqXpra61Jk8Kkn5g2kwRPK%2Fimg.jpg)


>CSR_SPA의 장단점
* 첫 로딩에서 HTML을 모두 다운받기 때문에 **초기로딩 속도는 느리**다.
* 하지만 초기 로딩만 기다리면 다음 동적으로 **부분 렌더링** 되기 때문에 빠르다는 인식을 준다.
* 서버에게 요청하는 횟수가 훨씬 적기 때문에 서버의 부담이 덜하다.
* 검색엔진(SEO)이 어렵다. 즉 **내 구글검색으로도 페이지가 노출**되지 않는다.
* 이와 같은 단점은 NEXT.JS를 통해서 SEO(검색엔진)와 SSR 을 **보완** 가능하다.

>SSR_MPA
* 앞선 SPA의 반대라고 보면 편하다.
* 초기 로딩속도는 빠르다.
* 하지만 렌더링 시 HTML 파일을 가져와야하기때문에 부분 렌더링이 아닌 전체 렌더링으로써 화면깜빡임이 생길 수 있다.
* HTML 파일이 여러개이므로 SEO에 유리하고, META 데이터로 페이지마다 설명을 넣을 수 있다.
* 서버의 요청이 잦아 질수 있다. 부하 증가로 이어질 가능성이 있다.