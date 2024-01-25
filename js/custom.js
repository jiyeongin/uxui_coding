// Clone Menu and Info Elements
const menu = document.querySelector('.nav');
const info = document.querySelector('.info');
const newMenuBox = document.querySelector('.new-mobile-menu');
const newMenu = menu.cloneNode(true);
const newInfo = info.cloneNode(true);

newMenuBox.insertAdjacentElement('beforeend', newMenu);
newMenuBox.insertAdjacentElement('beforeend', newInfo);

// console.log(newInfo);

// Mobile Menu Toggle Function_ 메뉴바 누를 때 활성화 되기도, 안되기도 함
const mobileMenuIcon = document.querySelector('.mobile-icon');

mobileMenuIcon.addEventListener('click', (e) => {
  const target = e.currentTarget;
  target.classList.toggle('active');

  const menuHeight = document.querySelector('.new-mobile-menu').scrollHeight;
  // 요소가 펼쳐졌을 때의 높이

  // 빽틱(`)_ 숫자 1 옆의 ~ 표시 누르면 됨(영어로 설정하고)
  // console.log(`abc ${menuHeight}`);

  if (target.classList.contains('active')) {
    target.classList.remove('not-active');
    newMenuBox.style.height = `${menuHeight}px`;
  } else {
    target.classList.add('not-active');
  }
});

// Fixed Header Style Change and meet section start animation when Scrolling Down
const header = document.querySelector('.header');
const meetSection = document.querySelector('.meet-section');
const meetSectionTop = meetSection.offsetTop;

const scrCtrl = () => {
  const scry = window.scrollY; // 화면 최상단이 위치한 스크롤 위치값. 맨처음에 scry 의 값 = 0 이다.
  if (scry > 0) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }

  if (scry > meetSectionTop - 200) {
    // scry 브라우저 탑, meetSectionTop 요소 탑
    meetSection.classList.add('on');
  }
};

window.addEventListener('scroll', scrCtrl);

// Features Section Data
const features = [
  {
    image: '/soaply/images/about-icon-1.svg',
    // 절대경로(<-> 상대경로) : /soaply
    title: 'For All Skin Types',
    text: ' 유아런리해셰다 도겐왼칸은 서개는 어헤돈 즈봄쇼어와. 낪닶시는 밦상은 장그닥타를, 요이삼습지 잘효를 강굴의 으가리호라 해험회처의.',
  },
  {
    image: '/soaply/images/about-icon-2.svg',
    title: '100% Organic',
    text: '디랑당빘소바먼빟 자곴나고, 녜사힌이게 진횒, 거킨오픈고 언비며 겨동히는 낀혝아상이나. 물서고러지 징사즈가 륵안의 잔재젱안이다 아인어 다어시즈는 리닸렴로하로, 댠흘아익는 매겨다배혀를 하신달아 디말.',
  },
  {
    image: '/soaply/images/about-icon-3.svg',
    title: 'Cruelty Free',
    text: '디랑당빘소바먼빟 자곴나고, 녜사힌이게 진횒, 거킨오픈고 언비며 겨동히는 낀혝아상이나. 물서고러지 징사즈가 륵안의 잔재젱안이다 아인어 다어시즈는 리닸렴로하로, 댠흘아익는 매겨다배혀를 하신달아 디말.',
  },
];

// html의 features 안으로 들어가야 함
const featuresWrapper = document.querySelector('.features');

features.forEach((feature) => {
  const featureElm = `
  <div class="feature">
    <div class="feature-icon">
      <img src="${feature.image}" alt="" />
    </div>
    <h4>${feature.title}</h4>
    <p>${feature.text}</p>
  </div>
  
  `;

  featuresWrapper.insertAdjacentHTML('beforeend', featureElm);
});

// Swiper Slider Codes
const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical', // 디폴트는 direction: 'horizontal'임
  loop: true, // 옆으로 이동 무한반복 가능

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});
