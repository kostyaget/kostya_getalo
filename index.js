$(function() {
  var header = $(".header__logo");
  $(window).scroll(function() {    
    var scroll = $(window).scrollTop();
    if (scroll >= 200) { // adjust number based on how much you want the user to scroll before the logo disappears
      header.addClass("header__logo-hide");
    } else {
      header.removeClass("header__logo-hide");
    }
  });
});
