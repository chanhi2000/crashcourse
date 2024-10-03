---
lang: ko-KR
title: PHP 3분 핵심 요약집
description: PHP 3분 핵심 요약집
icon: fa-brands fa-php
category: 
  - PHP
  - MySQL
tag: 
  - blog
  - php
  - mysql
  - laravel
head:
  - - meta:
    - property: og:title
      content: PHP 3분 핵심 요약집
    - property: og:description
      content: PHP 3분 핵심 요약집
    - property: og:url
      content: https://chanhi2000.github.io/crashcourse/php/three-min-summary/
---

# {{ $frontmatter.title }} 관련

[[toc]]

---

<SiteInfo
  name="PHP 3분 핵심 요약집 | WikiDocs"
  desc="이 시리즈는 책으로 출간된 php 3분 핵심 요약집을 다룹니다."
  url="https://wikidocs.net/5793"
  logo="https://wikidocs.net/static/img/favicon.ico"
  preview="https://images.velog.io/images/ysedeveloper/post/ab38e917-253e-47af-afe1-97bdae13f67e/800x0.webp" />

이 시리즈는 책으로 출간된 [php 3분 핵심 요약집](http://www.yes24.com/Product/Goods/96264727)을 다룹니다.

이 글은 **단 몇 개월 만이라도 웹 프로그래밍을 해 본 사람**이 짧은 시간 내에 **PHP** 를 습득해서 사용해야 하는 상황을 위해 **빠르게 읽어서 전반적인 내용을 인지**하고 상세한 작동원리는 몰라도 **어떤 기능이 있는지 어떻게 사용하는지는 익힐 수 있도록** 쓰였습니다.

일하다 보면 최근에 쓰던 언어나 프레임워크가 아니라 전혀 다른, 혹은 예전에 써 보았던 기술을 사용해야 할 일이 종종 있습니다. 사람의 기억력이란 한계가 있어서 오래된 기억들은 차례로 잊어갑니다. 개발 관련 지식도 마찬가지입니다. 깊은 잠재의식 속으로 내려가서 계기가 있을 때까지 자고 있지요.

이 글은 PHP를 사용하게 되는 시점에 **자는 기억을 깨우는 용도**로 사용하기 위해 작성되었습니다. 따라서 이 글은 모든 항목을 세세하게 설명하지 않습니다. 대신 ***짧게 압축되어 있고 기능별로 나누어져 있어서 필요할 때 찾아보기 쉽게 구성**했습니다.

개발을 단 한 번도 해 보지 않은 초보자 분들이 보기에는 조금 불친절하게 느껴질 수도 있습니다만 기초적인 내용이기 때문에 어렵지는 않습니다. 만약 **언어 무관하게 단 몇 개월 만이라도 웹 프로그래밍을 해 본 사람 이 짧은 시간 내에 PHP 를 습득해서 사용해야 하는 상황**에는 더욱 유용할 거로 생각합니다.

책은 **챕터 하나당 1분~5분** 정도면 읽을 수 있을 정도의 분량으로 되어 있습니다. 잠깐 짬 내서 읽거나 필요한 부분을 찾아 적용하기에 부담 없는 시간입니다.

**개발을 배우기 좋은 방법** 중 하나는 우선 어떤 기능이 있는지 확인해 보고 적용해 보는 것입니다.
여기서 가장 중요한 것은 모든 기능을 완벽하게 익히는 것이 절대 아니라 그냥 이런 기능도 있구나 싶은 정도로 알아두고 필요할 때 자세히 찾아보고 적용하는 것입니다. 어느 분야나 마찬가지겠지만 전체적인 그림을 그릴 수 있게 되면 개별적으로 존재하던 개념이 어느 순간 서로 연결되는 것을 느낄 수 있게 됩니다. 서로 연결되는 개념이 더 풍부해질수록 개발 실력은 더 많이 늘어납니다.

어차피 모든 기능의 모든 사용법을 다 외우고 있는 사람은 희소합니다. 개발을 직업으로 삼고 있는 사람도 마찬가지입니다. 전문가라고 불리는 사람들은 모든 것을 암기해서 할 수 있는 사람이 아니라 어떤 기능이 어느 상황에서 사용할 수 있는지를 판단할 수 있는 사람입니다.

한 권으로 모든 것을 익힐 수 있는 책은 세상에 없습니다. 다양한 책을 읽고 여러 가지 소스코드를 분석해 보고 수많은 개발을 진행해 보면서 실력이 늘어납니다. 이 글도 여러분이 당면한 문제를 해결하는데 조그만 초석이 되었으면 좋겠습니다.

---

## Table of Contents

- 01. 개발 환경 설정과 기초 문법
  - [01A. PHP와 MySQL 이란](01-basics/01A.md)
  - [01B. 개발환경 설정](01-basics/01B.md)
  - [01C. 첫번째 php 프로그램 만들기](01-basics/01C.md)
  - [01D. 주석달기](01-basics/01D.md)
  - [01E. 변수](01-basics/01E.md)
  - [01F. 배열](01-basics/01F.md)
  - [01G. 산술 연산자와 문자열 연산자](01-basics/01G.md)
  - [01H. 비교 연산자](01-basics/01H.md)
  - [01I. 논리 연산자](01-basics/01I.md)
  - [01J. 조건문](01-basics/01J.md)
  - [01K. 반복문](01-basics/01K.md)
  - [01L. 함수](01-basics/01L.md)
- 02. 웹 다루기
  - [02A. GET 파라미터](02-web/02A.md)
  - [02B. POST 파라미터](02-web/02B.md)
  - [02C. 리다이렉트](02-web/02C.md)
  - [02D. 세션 다루기](02-web/02D.md)
  - [02E. html 이스케이프 하기](02-web/02E.md)
  - [02F. 비밀번호 암호화하고 매칭하기](02-web/02F.md)
  - [02G. 파일 읽고 쓰기](02-web/02G.md)
  - [02H. 직렬화와 역직렬화](02-web/02H.md)
  - [02I. 다른 파일 포함하기](02-web/02I.md)
  - [02J. 날짜 시간 계산하기](02-web/02J.md)
  - [02K. JSON 다루기](02-web/02K.md)
- 03. 데이터베이스 다루기
  - [03A. MySQL 데이터베이스 생성하기](03-database/03A.md)
  - [03B. MySQL 테이블 생성하기](03-database/03B.md)
  - [03C. MySQL 테이블에 값 가져오기](03-database/03C.md)
  - [03D. MySQL 테이블에 값 입력하기](03-database/03D.md)
  - [03E. MySQL 테이블에 값 수정하기](03-database/03E.md)
  - [03F. MySQL 테이블에 값 삭제하기](03-database/03F.md)
  - [03G. PHP에서 MySQL 접속하기](03-database/03G.md)
  - [03H. PHP에서 MySQL 값 가져오기](03-database/03H.md)
  - [03I. PHP에서 MySQL 값 입력하기](03-database/03I.md)
  - [03J. PHP에서 MySQL 값 수정 / 삭제하기](03-database/03J.md)
- 04. 문자열 함수들
  - [04A. 문자열이 특정 문자열로 시작하는지 검사하기](04-string/04A.md)
  - [04B. 문자열이 특정 문자열로 끝나는지 검사하기](04-string/04B.md)
  - [04C. 문자열이 특정 문자열을 포함하는지 검사하기](04-string/04C.md)
  - [04D. 문자열 자르기](04-string/04D.md)
  - [04E. 문자열 줄 단위로 자르기](04-string/04E.md)
  - [04F. 문자열 바꾸기](04-string/04F.md)
- 05. 유효성 검사와 데이터 정제
  - [05A. 값이 비어있는지 검사하기](05-validation/05A.md)
  - [05B. 값이 숫자인지 검사하기](05-validation/05B.md)
  - [05C. 값이 알파벳과 숫자로만 이루어져 있는지 검사하기](05-validation/05C.md)
  - [05D. 값이 이메일인지 확인하기](05-validation/05D.md)
  - [05E. 값을 이메일 형식만 남기고 삭제하기](05-validation/05E.md)
- 06. 모던 php
  - [06A. 내장 웹서버 실행하기](06-modern-php/06A.md)
  - [06B. 익명 함수 사용하기](06-modern-php/06B.md)
  - [06C. 클래스 사용하기](06-modern-php/06C.md)
  - [06D. 네임스페이스 사용하기](06-modern-php/06D.md)
  - [06E. 오토로드 사용하기](06-modern-php/06E.md)
  - [06F. 의존성 라이브러리 관리자 컴포저](06-modern-php/06F.md)
  - [06G. 유닛 테스트](06-modern-php/06G.md)
- 07. 한시간 내에 한줄 메모장 만들기
  - [07A. 데이터베이스 생성하기](07-miniproject/07A.md)
  - [07B. 데이터베이스 유저 생성하기](07-miniproject/07B.md)
  - [07C. 데이터베이스 유저에 권한 추가하기](07-miniproject/07C.md)
  - [07D. 데이터베이스 테이블 생성하기](07-miniproject/07D.md)
  - [07E. hosts 설정하기](07-miniproject/07E.md)
  - [07F. 데이터베이스 접속 파일 만들기](07-miniproject/07F.md)
  - [07G. 공통 헤더 만들기](07-miniproject/07G.md)
  - [07H. 회원가입 화면 만들기](07-miniproject/07H.md)
  - [07I. 회원가입 기능 만들기](07-miniproject/07I.md)
  - [07J. 로그인 화면 만들기](07-miniproject/07J.md)
  - [07K. 로그인 기능 만들기](07-miniproject/07K.md)
  - [07L. 글쓰기 기능 만들기](07-miniproject/07L.md)
  - [07M. 글삭제 API 만들기](07-miniproject/07M.md)
  - [07N. 글목록 API 만들기](07-miniproject/07N.md)
  - [07O. 목록 화면 만들기](07-miniproject/07O.md)
  - [07P. 메인 페이지 만들기](07-miniproject/07P.md)
- [08. 마치면서](08-final-note.md)

---
