import GraphTabs from 'graph-tabs';
const tabs = new GraphTabs('corporate-tabs');

const tabsButtons = document.querySelectorAll('.corporate-tabs .tabs__nav-btn');
const decorElem = document.querySelector('.corporate-tabs .active-slide-decor');

Array.prototype.forEach.call(tabsButtons, function(button, index) {
  button.addEventListener('click', ()=>{
    decorElem.style.setProperty('--slide-position', button.parentElement.offsetLeft + 'px')
    decorElem.style.setProperty('--elem-width', button.parentElement.offsetWidth + 'px')
  })
})

decorElem.style.setProperty('--slide-position', tabsButtons[0].parentElement.offsetLeft + 'px')
decorElem.style.setProperty('--elem-width', tabsButtons[0].parentElement.offsetWidth + 'px')

