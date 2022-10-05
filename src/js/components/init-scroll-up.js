import SmoothScroll from 'smooth-scroll';
const scroll = new SmoothScroll('[data-scroll-up]',{
  offset: 150,
  speed: 500,
	speedAsDuration: true,
  easing: 'easeInOutQuart',
});
