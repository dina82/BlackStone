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
    autoplay:true
});
  // magnific popper

// $('#manager-message').magnificPopup({
//   items: [
//     {
//       src: './images/services/service2.jpg',
//       title: 'Peter & Paul fortress in SPB'
//     },
//     {
//       src: './images/services/service5.jpg',
//       type: 'iframe' // this overrides default type
//     },
//     {
//       src: $('<div class="white-popup">Dynamically created element</div>'), // Dynamically created element
//       type: 'inline'
//     },
//     {
//       src: '<div class="white-popup">Popup from HTML string</div>', // HTML string
//       type: 'inline'
//     }
//   ],
//   gallery: {
//     enabled: true
//   },
//   type: 'image' // this is a default type
// });
$('#open-popup').magnificPopup({
  items: [
    {
      src: './images/services/service2.jpg',
      title: 'Peter & Paul fortress in SPB'
    },
    {
      src: '<div class="white-popup">Dynamically created popup</div>',
      type: 'inline'
  }
    
  ],
  gallery: {
    enabled: true
  },
  type: 'image'
});
})