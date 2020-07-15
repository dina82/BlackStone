$(document).ready(function () {

  $("#header-navbar ul li").on('click',function () {
    $(this).addClass('active').siblings().removeClass('active');
    
  })
  // arrow to scroll top
  $(Window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('header').addClass('fixed-navbar');
      $("#arrow").fadeIn()
    } else {
      $('header').removeClass('fixed-navbar');
       $("#arrow").fadeOut() 
  }
  })
  $("#arrow").click(function () {
    $('html, body').animate({ scrollTop: 0 }, 3000, "easeInOut")
  })
  lightbox.option({
    'fadeDuration': 200,
    // 'wrapAround': true
    "imageFadeDuration": 200,
    "resizeDuration": 300,
    "disableScrolling": true,
    "alwaysShowNavOnTouchDevices": true
  })
  // nav tab of service details
  $('#services-details #nav-tab a.nav-link').on('click',function(){
    $(this).addClass('link-visted').siblings().removeClass('link-visted')
  })
  $('.grid').isotope({
    itemSelector: '.grid-item',
  });
  
  
})
// mixitup image gallary

var mixer = mixitup('.portfolio-list');
let x = document.getElementsByClassName("mangar-info")[0]
x.addEventListener('click', manage)
function manage(event) {
  console.log(event.target);

}