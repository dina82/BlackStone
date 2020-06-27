$(document).ready(function () {
    new WOW().init();

  // navbar
  $("#navbar-button").click(function () {
    $(this).parents().find("#header-navbar").css('transform', 'translateX(0px)');
    if ( $('#navbar-button ').children().hasClass("fa-bars") ) {
      $('#navbar-button ').children().removeClass('fa-bars ').addClass("fa-times");
    }
    else{
      $(this).parents().find("#header-navbar").css('transform', 'translateX(-400px)');
      $('#navbar-button ').children().removeClass('fa-times ').addClass("fa-bars");
      
    }
  })
  $("#header-navbar .nav-link").click(function(){
    $(this).parents().find("#header-navbar").css('transform', 'translateX(-400px)');
    $('#navbar-button ').children().removeClass('fa-times ').addClass("fa-bars");

  })
  // arrow to scroll top
  $(Window).scroll(function(){
    if( $(this).scrollTop() >300 ){
      $("#arrow").fadeIn()
    }else{$("#arrow").fadeOut()}
  })
  $("#arrow").click(function(){
    $('html, body').animate({scrollTop:0},3000, "easeInOut")
  })
  // carousel
  $("#owl-demo").owlCarousel({
    loop:true,
    autoplay:true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
});
  // magnific popper
  $('#manager-message').magnificPopup({
    items: [
      // { src: '<div class="col-md-6" style="color:#fff">HTML string</div>',
      //  type: 'inline'},
      {
            src: '<div class="container-fluid"> <div class="row"> <div class="col-md-4"><img class="col-md-6" src="./images/mangars/manager1.PNG" alt"error"></div> <div class="col-md-4"><div style="color:#fff"> black stone is an awars-winning and dynamic project & cost management consultancy. providing a high quality. value for money, fully tailored service to clients across all sectors throughout the mena region and beyond</div></div></div></div>  '
            ,type: 'inline'
          }

    ],
    gallery: {
        enabled: true
    },
    type: 'ajax' // this is default type
});

lightbox.option({
      'fadeDuration': 200,
      // 'wrapAround': true
      "imageFadeDuration":200,
      "resizeDuration":300,
      "disableScrolling":true,
      "alwaysShowNavOnTouchDevices" :true
      ,
      "positionFromTop":175,
      "showImageNumberLabel": false,
      // "wrapAround" :true
    })

})
let x= document.getElementsByClassName("mangar-info")[0]
x.addEventListener('click',manage)
function manage(event){
  console.log(event.target);
  
}