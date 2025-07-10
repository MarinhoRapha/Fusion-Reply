var header = document.getElementById('header')


 window.addEventListener('scroll', function(){
    if(window.scrollY > 15){
      header.classList.add('header-active')
    }else {
    header.classList.remove('header-active');
  }
 });



const items = document.querySelectorAll('.menu-desktop > ul > li > a');

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


function highlightMenu() {
  let currentSectionId = null;

  document.querySelectorAll("section").forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSectionId = section.id;
    }
  });

  if (currentSectionId) {
    items.forEach(item => {
      const targetId = item.getAttribute("href").slice(1);
      if (targetId === currentSectionId) {
        item.classList.add("active-text");
      } else {
        item.classList.remove("active-text");
      }
    });
  }

}

window.addEventListener("scroll", highlightMenu);




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


