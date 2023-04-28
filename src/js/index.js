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
// import '../sass/main.scss';

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


// const header = document.querySelector('header');
// const nav = document.querySelector('header__nav');

// nav.addEventListener('mouseleave', () => {
//   header.classList.add('hide');
// });

// nav.addEventListener('mouseenter', () => {
//   header.classList.remove('hide');
// });