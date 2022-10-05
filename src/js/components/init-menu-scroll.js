import { mobileCheck } from "../functions/mobile-check";
(function () {
  if(mobileCheck() == 'unknown') {
    init();
  } else {
    document.querySelector('.menu__content-wrapper').classList.add('menu__content-wrapper--mobile')
  }

  var g_containerInViewport;

  function init() {
    setStickyContainersSize();
    bindEvents();
  }

  function bindEvents() {
    window.addEventListener("wheel", wheelHandler);
  }

  function setStickyContainersSize() {
    document.querySelectorAll('.sticky-container').forEach(function (container) {
      const stikyContainerHeight = container.querySelector('.menu__content-wrapper').scrollWidth;
      container.setAttribute('style', 'height: ' + (stikyContainerHeight - (stikyContainerHeight * 0.3)) + 'px');
    });
  }

  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top <=0 && rect.bottom > (document.documentElement.clientHeight - 400);
  }

  function wheelHandler(evt) {

    const containerInViewPort = Array.from(document.querySelectorAll('.sticky-container')).filter(function (container) {
      return isElementInViewport(container);
    })[0];

    if (!containerInViewPort) {
      return;
    }

    var isPlaceHolderBelowTop = containerInViewPort.offsetTop < document.documentElement.scrollTop;
    var isPlaceHolderBelowBottom = containerInViewPort.offsetTop + containerInViewPort.offsetHeight > document.documentElement.scrollTop;
    let g_canScrollHorizontally = isPlaceHolderBelowTop && isPlaceHolderBelowBottom;

    if (g_canScrollHorizontally) {
      containerInViewPort.querySelector('.menu__content-wrapper').scrollLeft += evt.deltaY;
    }
  }
})();
