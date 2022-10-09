
$(document).ready(function() {


$(".change-color").on('click', function(event){
  event.preventDefault();
  $(".container-fluid").toggleClass('dark');

 var darkMode =  $('.container-fluid').hasClass('dark');

 if (darkMode) {
  $('.dark #notary').attr("src","./public/img/Notariuszlight.png");
  $('.dark .icon').attr("src","./public/img/arrowlight.svg");
 } else {
  $('#notary').attr("src","./public/img/Notariusz.svg");
  $('.icon').attr("src","./public/img/arrow.svg");
 }
});


$(".menu-mobile").on('click', function(event){
  event.preventDefault();
  $(".mobile-menu-container").toggleClass('active');

});

// var srcContent = false;
// $(".contact__questions--list li").click(function() {
//   srcContent = !srcContent;

//   $(this).find(".list--title p").toggle('slow');
//   $(this).find("img").css("margin-top", srcContent ? 15 : 0).attr("src", srcContent ? "./public/img/icons/minus.svg" : "./public/img/icons/plus.svg");
// });

})
