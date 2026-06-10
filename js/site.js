(function () {
  var page = document.body.dataset.page;
  if (!page) return;

  var products = [
    { id: "omega", name: "rTG 오메가3", desc: "EPA 및 DHA 함유 유지", price: "32,000원", image: "images/product1.png", tag: "BEST" },
    { id: "probiotics", name: "프리미엄 유산균", desc: "17종 혼합 유산균", price: "28,000원", image: "images/product2.png", tag: "BEST" },
    { id: "multi", name: "종합 비타민 미네랄", desc: "20종 비타민 & 미네랄", price: "25,000원", image: "images/product3.png", tag: "NEW" },
    { id: "vitaminc", name: "비타민C 1000", desc: "영국산 프리미엄 비타민C", price: "15,000원", image: "images/product4.png", tag: "BEST" },
    { id: "milk", name: "밀크씨슬 플러스", desc: "간 건강에 도움을 줄 수 있음", price: "22,000원", image: "images/product5.png", tag: "NEW" }
  ];

  var nav = [
    ["brand.html", "브랜드", "brand"],
    ["products.html", "제품소개", "products"],
    ["health.html", "건강정보", "health"],
    ["event.html", "이벤트", "event"],
    ["support.html", "고객센터", "support"],
    ["subscription.html", "정기구독", "subscription"]
  ];

  function header() {
    return '<div class="top-banner">신규회원 가입 시 10% 할인 쿠폰 증정</div>' +
      '<header class="site-header"><div class="inner header-inner">' +
      '<a class="logo" href="index.html"><strong>BRAND NAME</strong><span>YOUR DAILY HEALTH</span></a>' +
      '<nav class="main-nav" aria-label="주요 메뉴">' +
      nav.map(function (item) {
        return '<a class="' + (page === item[2] ? 'active' : '') + '" href="' + item[0] + '">' + item[1] + '</a>';
      }).join("") + '<a class="mobile-only" href="login.html">마이페이지</a><a class="mobile-only" href="cart.html">장바구니</a>' +
      '</nav><div class="header-icons">' +
      '<a class="head-icon" href="products.html" aria-label="검색"><svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path></svg></a>' +
      '<a class="head-icon" href="login.html" aria-label="마이페이지"><svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"></circle><path d="M20 21a8 8 0 0 0-16 0"></path></svg></a>' +
      '<a class="head-icon cart-link" href="cart.html" aria-label="장바구니"><svg viewBox="0 0 24 24"><circle cx="8" cy="21" r="1.4"></circle><circle cx="19" cy="21" r="1.4"></circle><path d="M2.8 3h2.5l2.2 12.2a2 2 0 0 0 2 1.7h8.7a2 2 0 0 0 2-1.6l1-5.6H7"></path></svg><em>0</em></a>' +
      '</div></div></header>';
  }

  function footer() {
    return '<footer class="footer sub-footer"><div class="inner footer-top">' +
      '<div class="newsletter"><h2>뉴스레터 구독하기</h2><p>건강 정보와 다양한 혜택을 받아보세요.</p><form><label for="footer-email">이메일 주소</label><input id="footer-email" type="email" placeholder="이메일 주소를 입력하세요"><button type="submit" aria-label="구독 신청"><i></i></button></form></div>' +
      '<div class="footer-links"><div><h3>브랜드</h3><a href="brand.html">브랜드 소개</a><a href="brand.html#promise">브랜드 철학</a></div><div><h3>제품소개</h3><a href="products.html">전체 제품</a><a href="product-detail.html">베스트 제품</a></div><div><h3>건강정보</h3><a href="health.html">건강 가이드</a><a href="health.html#column">건강 칼럼</a></div><div><h3>고객센터</h3><a href="support.html">공지사항</a><a href="support.html#faq">자주 묻는 질문</a></div><div class="contact"><h3>고객센터</h3><strong>02-1234-5678</strong><p>평일 09:00 - 18:00<br>주말/공휴일 휴무</p></div></div></div>' +
      '<div class="footer-bottom"><div class="inner"><a class="logo small" href="index.html"><strong>BRAND NAME</strong><span>YOUR DAILY HEALTH</span></a><p>이용약관 · 개인정보처리방침</p><p>(주)브랜드네임 | 대표: 김건강 | 서울특별시 강남구 테헤란로 123</p><p>© 2026 BRAND NAME.</p></div></div></footer><a class="top-btn" href="#">TOP</a>';
  }

  function pageHero(eyebrow, title, text) {
    return '<section class="sub-hero"><div class="inner"><p>' + eyebrow + '</p><h1>' + title + '</h1><span>' + text + '</span></div></section>';
  }

  function productCards() {
    return '<div class="sub-product-grid">' + products.map(function (item) {
      return '<article class="shop-card"><a href="product-detail.html"><div class="shop-image"><span>' + item.tag + '</span><img src="' + item.image + '" alt="' + item.name + '"></div><div class="shop-info"><h3>' + item.name + '</h3><p>' + item.desc + '</p><strong>' + item.price + '</strong></div></a><button class="add-cart" type="button" data-product="' + item.name + '">담기</button></article>';
    }).join("") + '</div>';
  }

  var pages = {
    brand: pageHero("OUR STORY", "건강한 일상을 위한<br>정직한 선택", "자연의 지혜와 과학적 기준을 담아 매일 믿고 먹을 수 있는 제품을 만듭니다.") +
      '<section class="sub-section story-section"><div class="inner two-column"><div><p class="eyebrow">BRAND PHILOSOPHY</p><h2>좋은 건강은<br>좋은 기준에서 시작됩니다</h2></div><div class="story-copy"><p>우리는 원료의 출처부터 배합, 생산, 포장까지 모든 과정을 꼼꼼하게 살핍니다. 불필요한 것은 덜고 꼭 필요한 영양만 정직하게 담습니다.</p><p>누구나 자신의 건강을 쉽게 이해하고 꾸준히 관리할 수 있도록 명확한 정보와 편안한 제품 경험을 제공합니다.</p></div></div></section>' +
      '<section class="sub-section values" id="promise"><div class="inner"><div class="sub-title"><p>OUR STANDARD</p><h2>우리가 지키는 네 가지 약속</h2></div><div class="value-grid"><article><b>01</b><h3>엄선된 원료</h3><p>원산지와 안전성을 확인한 원료만 선택합니다.</p></article><article><b>02</b><h3>과학적 배합</h3><p>기능과 섭취 편의성을 고려해 설계합니다.</p></article><article><b>03</b><h3>철저한 품질관리</h3><p>GMP 인증 시설에서 기준에 맞춰 생산합니다.</p></article><article><b>04</b><h3>투명한 정보</h3><p>제품 정보를 이해하기 쉽게 안내합니다.</p></article></div></div></section>' +
      '<section class="brand-quote"><div class="inner"><p>FOR YOUR BETTER TOMORROW</p><h2>오늘의 작은 선택이<br>더 건강한 내일을 만듭니다.</h2></div></section>',

    products: pageHero("ALL PRODUCTS", "내 몸에 꼭 맞는<br>건강 솔루션", "건강 고민과 라이프스타일에 맞는 제품을 찾아보세요.") +
      '<section class="sub-section"><div class="inner"><div class="filter-row"><button class="active">전체</button><button>혈행건강</button><button>장건강</button><button>활력</button><button>간건강</button><button>뼈·관절</button></div><div class="list-head"><strong>전체 제품 <em>5</em></strong><select aria-label="정렬"><option>추천순</option><option>낮은 가격순</option><option>높은 가격순</option></select></div>' + productCards() + '</div></section>',

    health: pageHero("HEALTH GUIDE", "알수록 쉬워지는<br>건강 관리", "일상에서 바로 실천할 수 있는 건강 정보와 성분 이야기를 전합니다.") +
      '<section class="sub-section"><div class="inner"><div class="sub-title"><p>HEALTH CONCERNS</p><h2>어떤 건강 고민이 있으신가요?</h2></div><div class="guide-grid"><article><img src="images/recommend1.png" alt=""><div><span>혈행 건강</span><h3>오메가3, 어떻게 골라야 할까요?</h3><p>원료 형태와 EPA·DHA 함량을 확인하는 방법</p></div></article><article><img src="images/recommend2.png" alt=""><div><span>장 건강</span><h3>유산균을 매일 먹어야 하는 이유</h3><p>나에게 맞는 균주와 섭취 시간 알아보기</p></div></article><article><img src="images/recommend3.png" alt=""><div><span>활력</span><h3>피곤한 하루를 위한 비타민B</h3><p>에너지 대사에 필요한 영양소 이야기</p></div></article></div></div></section>' +
      '<section class="sub-section column-section" id="column"><div class="inner"><div class="sub-title"><p>HEALTH COLUMN</p><h2>이번 주 건강 칼럼</h2></div><div class="column-grid"><article><b>01</b><span>5 MIN READ</span><h3>건강기능식품,<br>언제 먹는 것이 좋을까요?</h3><a href="#">읽어보기</a></article><article><b>02</b><span>4 MIN READ</span><h3>환절기 면역 관리를 위한<br>생활 습관 5가지</h3><a href="#">읽어보기</a></article><article><b>03</b><span>6 MIN READ</span><h3>영양제 라벨에서<br>꼭 확인해야 할 정보</h3><a href="#">읽어보기</a></article></div></div></section>',

    event: pageHero("EVENT & BENEFIT", "건강한 시작을 위한<br>특별한 혜택", "BRAND NAME이 준비한 다양한 이벤트와 쇼핑 혜택을 만나보세요.") +
      '<section class="sub-section"><div class="inner"><div class="event-feature"><div><span>WELCOME BENEFIT</span><h2>처음 만나는 건강 습관<br><b>신규 회원 10% 할인</b></h2><p>가입 즉시 전 상품에 사용할 수 있는 할인 쿠폰을 드립니다.</p><a class="solid-btn" href="login.html">회원가입하기</a></div><div class="coupon">10<small>%</small><em>WELCOME COUPON</em></div></div><div class="event-grid"><article><span>진행중</span><h3>리뷰 작성하고<br>최대 5,000P 받기</h3><p>2026.01.01 - 2026.12.31</p></article><article><span>상시혜택</span><h3>5만원 이상 구매 시<br>무료배송</h3><p>전 회원 대상</p></article><article><span>구독혜택</span><h3>정기구독 신청 시<br>최대 15% 할인</h3><p>첫 구독부터 즉시 적용</p></article></div></div></section>',

    support: pageHero("CUSTOMER CENTER", "무엇을 도와드릴까요?", "제품과 주문에 관한 궁금한 점을 빠르게 확인해 보세요.") +
      '<section class="support-quick"><div class="inner quick-grid"><a href="#faq"><b>FAQ</b><span>자주 묻는 질문</span></a><a href="#inquiry"><b>1:1</b><span>문의하기</span></a><a href="tel:0212345678"><b>02</b><span>전화 상담</span></a><a href="#"><b>DELIVERY</b><span>배송 조회</span></a></div></section>' +
      '<section class="sub-section" id="faq"><div class="inner narrow"><div class="sub-title"><p>FAQ</p><h2>자주 묻는 질문</h2></div><div class="faq-list"><details open><summary>건강기능식품은 언제 섭취하는 것이 좋나요?</summary><p>제품별 섭취 방법이 다르므로 패키지의 섭취량 및 섭취 방법을 먼저 확인해 주세요.</p></details><details><summary>주문한 상품은 언제 배송되나요?</summary><p>평일 오후 2시 이전 결제 완료 건은 당일 출고되며, 보통 1~3영업일 내 도착합니다.</p></details><details><summary>교환 및 반품은 어떻게 신청하나요?</summary><p>상품 수령 후 7일 이내 고객센터 또는 1:1 문의를 통해 신청할 수 있습니다.</p></details><details><summary>여러 영양제를 함께 먹어도 되나요?</summary><p>성분이 중복될 수 있으므로 제품 정보를 확인하고 전문가와 상담하는 것을 권장합니다.</p></details></div></div></section>' +
      '<section class="inquiry-section" id="inquiry"><div class="inner inquiry-box"><div><p>1:1 INQUIRY</p><h2>답을 찾지 못하셨나요?</h2><span>문의 내용을 남겨주시면 순서대로 답변드리겠습니다.</span></div><a class="solid-btn" href="mailto:help@brandname.co.kr">문의하기</a></div></section>',

    subscription: pageHero("SUBSCRIPTION", "잊지 않고 챙기는<br>나만의 건강 루틴", "원하는 제품을 원하는 주기로, 할인과 무료배송 혜택까지 편리하게 받아보세요.") +
      '<section class="sub-section"><div class="inner"><div class="sub-title centered"><p>SUBSCRIPTION BENEFIT</p><h2>꾸준함을 위한 특별한 혜택</h2></div><div class="subscribe-benefits"><article><b>15%</b><h3>구독 할인</h3><p>회차에 따라 최대 15% 할인</p></article><article><b>0원</b><h3>항상 무료배송</h3><p>금액과 관계없이 배송비 무료</p></article><article><b>FREE</b><h3>자유로운 일정</h3><p>주기 변경과 건너뛰기 가능</p></article></div></div></section>' +
      '<section class="subscribe-builder"><div class="inner two-column"><div><p class="eyebrow">START SUBSCRIPTION</p><h2>나에게 맞는 구독을<br>시작해 보세요</h2><ol><li><b>1</b><span>제품 선택<small>필요한 건강 제품을 선택하세요.</small></span></li><li><b>2</b><span>배송 주기 선택<small>2주, 4주, 8주 중 선택하세요.</small></span></li><li><b>3</b><span>편리하게 받기<small>매번 결제할 필요 없이 정기 배송됩니다.</small></span></li></ol></div><div class="subscribe-card"><span>가장 많이 선택한 구독</span><img src="images/service%20img.png" alt="정기구독 제품"><h3>데일리 베이직 구독</h3><p>오메가3 + 종합 비타민 미네랄</p><strong>월 48,450원 <del>57,000원</del></strong><a class="solid-btn" href="cart.html">구독 시작하기</a></div></div></section>',

    login: '<main class="account-main"><div class="account-card"><a class="logo" href="index.html"><strong>BRAND NAME</strong><span>YOUR DAILY HEALTH</span></a><h1>로그인</h1><p>건강한 일상을 이어서 관리해 보세요.</p><form><label for="login-id">아이디</label><input id="login-id" type="text" placeholder="아이디를 입력하세요"><label for="login-password">비밀번호</label><input id="login-password" type="password" placeholder="비밀번호를 입력하세요"><button class="solid-btn" type="submit">로그인</button></form><div class="account-links"><a href="#">아이디 찾기</a><a href="#">비밀번호 찾기</a><a href="#">회원가입</a></div><a class="back-home" href="index.html">메인으로 돌아가기</a></div></main>',

    cart: pageHero("SHOPPING CART", "장바구니", "선택하신 제품을 확인하고 주문을 진행해 주세요.") +
      '<section class="sub-section"><div class="inner cart-layout"><div class="cart-list"><label class="check-all"><input type="checkbox" checked> 전체 선택</label><article><input type="checkbox" checked><img src="images/product1.png" alt="rTG 오메가3"><div><h3>rTG 오메가3</h3><p>EPA 및 DHA 함유 유지</p><button type="button">삭제</button></div><div class="quantity"><button type="button">-</button><b>1</b><button type="button">+</button></div><strong>32,000원</strong></article></div><aside class="order-summary"><h2>결제 금액</h2><p><span>상품 금액</span><b>32,000원</b></p><p><span>배송비</span><b>3,000원</b></p><p class="total"><span>총 결제금액</span><strong>35,000원</strong></p><button class="solid-btn" type="button">주문하기</button><a href="products.html">쇼핑 계속하기</a></aside></div></section>',

    detail: '<section class="detail-main"><div class="inner detail-grid"><div class="detail-image"><span>BEST</span><img src="images/product1.png" alt="rTG 오메가3"></div><div class="detail-info"><p class="eyebrow">BLOOD CIRCULATION</p><h1>rTG 오메가3</h1><p class="detail-desc">체내 흡수율을 고려한 rTG형 오메가3로<br>매일 간편하게 혈행 건강을 관리하세요.</p><div class="rating">★★★★★ <span>4.9 (128개 리뷰)</span></div><strong class="detail-price">32,000원</strong><dl><div><dt>배송비</dt><dd>3,000원 (50,000원 이상 무료)</dd></div><div><dt>섭취방법</dt><dd>1일 1회, 1회 1캡슐</dd></div></dl><div class="buy-option"><span>수량</span><div class="quantity"><button type="button">-</button><b>1</b><button type="button">+</button></div></div><div class="buy-total"><span>총 상품금액</span><strong>32,000원</strong></div><div class="buy-actions"><button class="line-btn add-cart" type="button" data-product="rTG 오메가3">장바구니</button><a class="solid-btn" href="cart.html">바로 구매하기</a></div></div></div></section>' +
      '<section class="detail-tabs"><div class="inner"><a href="#info">상품정보</a><a href="#review">리뷰 128</a><a href="#qna">상품문의</a></div></section><section class="detail-content" id="info"><div class="inner narrow"><p>PREMIUM OMEGA-3</p><h2>매일 한 캡슐로 챙기는<br>혈행 건강 루틴</h2><div class="detail-points"><article><b>01</b><h3>rTG형 오메가3</h3><p>불포화지방산의 체내 흡수를 고려한 형태</p></article><article><b>02</b><h3>EPA 및 DHA</h3><p>혈중 중성지질과 혈행 개선에 도움</p></article><article><b>03</b><h3>꼼꼼한 품질관리</h3><p>산패와 중금속 기준을 확인한 원료</p></article></div><img class="detail-wide-image" src="images/hero_pc.png" alt=""></div></section>'
  };

  var app = document.getElementById("app");
  if (!app) return;
  var standalone = page === "login";
  app.innerHTML = (standalone ? "" : header()) + (pages[page] || "") + (standalone ? "" : footer());

  document.querySelectorAll(".add-cart").forEach(function (button) {
    button.addEventListener("click", function () {
      var count = Number(localStorage.getItem("brandCart") || 0) + 1;
      localStorage.setItem("brandCart", count);
      updateCart();
      button.textContent = "담았어요";
      setTimeout(function () { button.textContent = button.classList.contains("line-btn") ? "장바구니" : "담기"; }, 1200);
    });
  });

  function updateCart() {
    var count = Number(localStorage.getItem("brandCart") || 0);
    document.querySelectorAll(".cart-link em").forEach(function (badge) {
      badge.textContent = count;
      badge.style.display = count ? "flex" : "none";
    });
  }
  updateCart();

  document.querySelectorAll("form").forEach(function (form) {
    form.addEventListener("submit", function (event) { event.preventDefault(); });
  });
})();
