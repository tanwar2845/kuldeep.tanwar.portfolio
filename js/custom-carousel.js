$(document).ready(function(){
  $('.project-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,  // Make sure only one set of dots is used
    items: 1,
    navText: ['<span class="arrow">&#8592;</span>',
      '<span class="arrow">&#8594;</span>']  // Left arrow and right arrow
  });
});