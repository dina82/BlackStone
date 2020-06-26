$(document).ready(function () {
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




$('.venobox').venobox({
  // bgcolor: '',
  // overlayColor: 'rgba(6, 12, 34, 0.85)',
  // closeBackground: '',
  // closeColor: '#fff'
  frameheight:'100%',
  framewidth:'100%'
});
})