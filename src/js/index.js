// $(function() {
//   var header = $(".header__logo");
//   $(window).scroll(function() {    
//     var scroll = $(window).scrollTop();
//     if (scroll >= 200) { // adjust number based on how much you want the user to scroll before the logo disappears
//       header.addClass("header__logo-hide");
//     } else {
//       header.removeClass("header__logo-hide");
//     }
//   });
// });


const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}