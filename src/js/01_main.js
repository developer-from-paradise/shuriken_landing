// Setup block
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    effect: "Default",
    grabCursor: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

});

// Header
let burger = $('.nav__burger');
let links = $('.nav__links')
burger.click(function () {
  if (links.hasClass('active') == false) {
    
    links.fadeIn();
    
    links.addClass('active');
    
    burger.addClass('animate__flipInX');
    
    burger.addClass('active-burger');
    
    setTimeout(function(){
      burger.removeClass('animate__flipInX');
    }, 300);
  } else {
    links.fadeOut();
    
    setTimeout(function(){
      links.removeClass('active');
    }, 300);

    burger.addClass('animate__flipInX');
    
    setTimeout(function(){
      burger.removeClass('active-burger');
      burger.removeClass('animate__flipInX');
    }, 300);
  }
  

});
// before top 15px
// after bottom 15px