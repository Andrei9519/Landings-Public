const swiper = new Swiper('.swiper-container', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

 // area-label
  a11y: {
    paginationBulletMessage: 'Слайд банер {{index}}',
  }
});


document.querySelectorAll('.tabs-nav__btn').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(e){
      const path = e.currentTarget.dataset.path;

      document.querySelectorAll('.tabs-nav__btn').forEach(function(btn){
  btn.classList.remove('tabs-nav__btn--active')});
      e.currentTarget.classList.add('tabs-nav__btn--active');

      document.querySelectorAll('.tabs-item').forEach(function(tabsBtn){
  tabsBtn.classList.remove('tabs-item--active')});
  document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
    });
});

//acordion
new Accordion('.accordion-container');


// burger
const burgerBtn = document.querySelector('.burger');
const menuClose = document.querySelector('.menu-close');
const menuBurger = document.querySelector('.header__nav');

burgerBtn.addEventListener('click', () => {
  menuBurger.classList.add("burger-active")
})

menuClose.addEventListener('click', () => {
  menuBurger.classList.remove("burger-active")
})


//search
document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('open-search-form').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.add('nav__search_show')
  })

  document.getElementById('search-form-close').addEventListener('click', (e) => {
    document.getElementById('search-form').classList.remove('nav__search_show')
  })

  document.getElementById('search-form').addEventListener('submit', (e) => {
    e.preventDefault()
  })
})
