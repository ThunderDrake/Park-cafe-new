import anime from "animejs";
import AOS from 'aos';

const initHeroAnimation = () => {
  window.onload = function() {
    const heroLogo = document.querySelector('.hero__logo svg');
    const firstRow = document.querySelector('.hero__subtitle-first-row');
    const secondRow = document.querySelector('.hero__subtitle-second-row');
    const smallText = document.querySelector('.hero__subtitle-small-text');
    const buttons = document.querySelector('.hero__buttons');

    const tl = anime.timeline({
      easing: 'easeInOutQuad',
      duration: 750
    })

    tl.add({
      targets: heroLogo,
      opacity: [1, 1],
      scale: [2, 1],
      translateY: [100, 0],
      delay: 1500
    })
    .add({
      targets: firstRow,
      opacity: 1,
      translateX: [50, -25]
    }, '+=100')
    .add({
      targets: secondRow,
      opacity: 1,
      translateX: [-50, 25]
    }, '+=100')
    .add({
      targets: smallText,
      opacity: [0, 1],
      translateY: [50, 0]
    }, '+=100')
    .add({
      targets: buttons,
      opacity: [0, 1],
      translateY: [50, 0]
    }, '+=100')

    AOS.init({
      once: true,
      offset: 50,
      duration: 1000,
    });
  }
}

initHeroAnimation();
