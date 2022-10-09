
$(document).ready(function() {


$(".change-color").on('click', function(event){
  event.preventDefault();
  $(".container-fluid").toggleClass('dark');
});

$(".menu-mobile").on('click', function(event){
  event.preventDefault();
  $(".mobile-menu-container").toggleClass('active');
})
})
