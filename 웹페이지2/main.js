'use strict'

// navbar가 상단에있을 때 투명하게 만들기
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    if (window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    } else {
        navbar.classList.remove('navbar--dark');
    }
});


//navbar 메뉴를 탭할 때 스크롤 처리
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
    const target = event.target;
    const link = target.dataset.link;
    if (link == null) {
        return
    }

    scrollIntoVirew(link);
})

//홈에서 컨텍 미 버튼 클릭 처리

const homeContactBtn = document.querySelector('.start__button');
homeContactBtn.addEventListener('click', () => {
    scrollIntoVirew('#footer')
})

//make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight
})


//show "arrow up" button when scrolling down
document.addEventListener('scroll', () => {
    const arrowUp = document.querySelector('.arrow-up');
    if (window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible')
    } else {
        arrowUp.classList.remove('visible')
    }
    //handle click on the "arrow up" button
    arrowUp.addEventListener('click', () => {
        scrollIntoVirew('#first__section')
    })

})













function scrollIntoVirew(select) {
    const scrollTo = document.querySelector(select);
    scrollTo.scrollIntoView({
        behavior: "smooth"
    });
}