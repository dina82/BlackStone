$(document).ready(function(){
    $(".navTrigger i").click(function(){
        
    })
    var trigger = $('.hamburger'),
      overlay = $('.overlay'),
     isClosed = false;

    trigger.click(function () {
      hamburger_cross();      
    });

    function hamburger_cross() {

      if (isClosed == true) {          
        overlay.hide();
        trigger.removeClass('is-open');
        trigger.addClass('is-closed');
        isClosed = false;
      } else {   
        overlay.show();
        trigger.removeClass('is-closed');
        trigger.addClass('is-open');
        isClosed = true;
      }
  }
  
  $('[data-toggle="offcanvas"]').click(function () {
        $('#wrapper').toggleClass('toggled');
  });
})
let x= document.getElementsByClassName("navTrigger")[0];
x.addEventListener("click",toggleNav)
function toggleNav(){

    document.getElementsByClassName('navTrigger')[0].classList.toggle('active');
    document.getElementById('mainListDiv').classList.toggle('show_list');
    document.getElementById('#mainListDiv').style.display="block"
}                                   
var textWrapper = document.querySelector('.first');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.first .letter',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.first',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });