const tabsButtons = document.querySelectorAll('.tabs__nav-btn');
const zoneSelect = document.querySelector('.graph-modal__content--reserve .customSelect');

tabsButtons.forEach((el, i) => {
  el.addEventListener('click', (e) => {
    let opt = zoneSelect.querySelectorAll('.custom-select-option');
    opt[i].click();
  })
})
