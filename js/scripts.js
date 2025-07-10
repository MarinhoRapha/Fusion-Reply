var header = document.getElementById('header')


 window.addEventListener('scroll', function(){
    if(window.scrollY > 15){
      header.classList.add('header-active')
    }else {
    header.classList.remove('header-active');
  }
 });



var items = document.querySelectorAll('.menu-desktop > ul > li > a ');

items[0].classList.add('active-text');

function removeActiveFromAll() {
  items.forEach(function(li) {
    li.classList.remove('active-text');
  });
}

items.forEach(function(li) {
    li.addEventListener('mouseenter', function() {
    removeActiveFromAll();        
    li.classList.add('active-text');   
  });
});





var menu = document.getElementsByClassName('fa-bars')[0];
var menuList = document.getElementById("menu-list")

menu.addEventListener('click', function(){
  menuList.classList.toggle('active-menu')
});


const swiper = new Swiper('.swiper', {
  slidesPerView: 3,
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  spaceBetween: 30,

    breakpoints: {
      1280: {
          slidesPerView: 3,
          
      },

      811: {
          slidesPerView: 2,
      },

      0: {
          slidesPerView: 1,
          maxBackfaceHiddenSlides: 9,
      },
    },
    

  pagination: {
        el: ".swiper-pagination",
      },
    

},

);


