$(document).ready(function () {

  // navbar
  $("#navbar-button").click(function () {
    // $(this).parents().find("#header-navbar").css('transform', 'translateX(0px)');
    // if ($('#navbar-button ').children().hasClass("fa-bars")) {
    //   $('#navbar-button ').children().removeClass('fa-bars ').addClass("fa-times");
    // }
    // else {
      // $(this).parents().find("#header-navbar").css('transform', 'translateX(-400px)');
      // $('#navbar-button ').children().removeClass('fa-times ').addClass("fa-bars");
    // }
  })
  $("#header-navbar ul li").on('click',function () {
    $(this).addClass('active').siblings().removeClass('active');
    
  })
  // arrow to scroll top
  $(Window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $("#arrow").fadeIn()
    } else { $("#arrow").fadeOut() }
  })
  $("#arrow").click(function () {
    $('html, body').animate({ scrollTop: 0 }, 3000, "easeInOut")
  })
  // carousel
  $("#owl-demo").owlCarousel({
    loop: true,
    autoplay: true,
    responsive: {
      100: {
        items: 1
      },
      600: {
        items: 1 
      },
      1000: {
        items: 3
      }
    }
  });

  lightbox.option({
    'fadeDuration': 200,
    // 'wrapAround': true
    "imageFadeDuration": 200,
    "resizeDuration": 300,
    "disableScrolling": true,
    "alwaysShowNavOnTouchDevices": true
    ,
    "positionFromTop": 175,
    "showImageNumberLabel": false,
    // "wrapAround" :true
  })
  // nav tab of service details
  $('#services-details #nav-tab a.nav-link').on('click',function(){
    $(this).addClass('link-visted').siblings().removeClass('link-visted')
  })
  
})
var mixer = mixitup('.portfolio-list');
let x = document.getElementsByClassName("mangar-info")[0]
x.addEventListener('click', manage)
function manage(event) {
  console.log(event.target);

}