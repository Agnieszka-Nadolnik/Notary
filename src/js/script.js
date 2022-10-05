
$(document).ready(function() {

//hamburger menu
// $('button.header__menu-toggle').on('click', function() {
//     $(this).toggleClass('is-active');
//     $(".header__menu").toggleClass('is-active').css("transition", "0.5s");
//   });


//scroll menu
// $(document).on('click', '.text-small a', function(event){
//     event.preventDefault();
//     var hash = this.hash;
//     var link = $(this);
//     var scrollOffset = $(this.hash).offset().top;

//     $(".text-small a").toggleClass('is-active').css("color", "red");
//     $(".header__menu-toggle").toggleClass('is-active');

//     $(".text-small a[href^='#']").css("color", "#959595");
//     $(this).css("color", "#2a3b64");

// });

$(".change-color").on('click', function(event){
  event.preventDefault();
  $(".container-fluid").toggleClass('dark');
});

$(".menu-mobile").on('click', function(event){
  event.preventDefault();
  $(".mobile-menu-container").toggleClass('active');
})

})
//animation

  // var obj = $(".scroll-animation");
  // var title = $(".banner__text h2");
  // var world = $(".main__about--img");
  // var doc = $(".wrapper");
  // var contact = $('.contact');
  // var menu = $("header");
  // var dashboard = $(".dashboard");
  // var newsletter = $(".newsletter");

  // $(window).on('scroll',function(){

  //   obj.each(function(){
  //     var objPos = $(this).offset().top;
  //     var scroll = $(window).scrollTop();
  //     var windowH = $(window).height();
  //     if(scroll > objPos - windowH){
  //       $(this).css({
  //         'opacity': '1'
  //       });
  //     } else {
  //       $(this).css({
  //         'opacity': '0'
  //       });
  //     }
  //   });

  //   title.each(function(){
  //     var objPos = $(this).offset().top;
  //     var scroll = $(window).scrollTop();
  //     var windowH = $(window).height();
  //     if(scroll > objPos - windowH){
  //       $(this).css({
  //         'transform': 'translate(0,0)'
  //       });
  //     } else {
  //       $(this).css({
  //         'transform': 'translate(0,50px)'
  //       });
  //     }
  //   });
  //   world.each(function(){
  //     var objPos = $(this).offset().top;
  //     var scroll = $(window).scrollTop();
  //     var windowH = $(window).height();
  //     if(scroll > objPos - windowH){
  //       $(this).find("div").css({
  //         "animation": "scale-animation 1s 0.5s forwards",
  //       });
  //       $(this).find("img").css("animation", "opacity-animation 1s 0.4s linear forwards");
        
  //     } else {
  //       $(this).find("div").css({
  //         "animation": "none",
  //     });
  //       $(this).find("img").css("animation", "none");
  //     }
  //   });

  //   dashboard.each(function(){
  //     var objPos = $(this).offset().top;
  //     var scroll = $(window).scrollTop();
  //     var windowH = $(window).height();
  //     if(scroll > objPos - windowH){
  //       $(this).find(".dashboard__img").css({
  //         "animation": "opacity-animation 1s 0.3s forwards",
  //       });

  //       $("#cokolwiek").css("color", "#959595");
        
  //     } else {
  //       $(this).find(".dashboard__img").css({
  //         "animation": "none",
  //     });
  //     }
  //   });

//     newsletter.each(function(){
//       var objPos = $(this).offset().top + 400;
//       var scroll = $(window).scrollTop();
//       var windowH = $(window).height();
//       if(scroll >= objPos - windowH){
//         doc.addClass("active-newsletter");
//         menu.fadeOut();
//       } else if ( scroll < objPos) {
//       menu.fadeIn();
//       doc.removeClass("active-newsletter");
//       }
//     });
//   });
// });
