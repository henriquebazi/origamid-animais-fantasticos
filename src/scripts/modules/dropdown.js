/* Accordion List */
function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt')

  if (accordionList.length) {
    function activeAccordion() {
      this.classList.toggle('active')
      this.nextElementSibling.classList.toggle('active')
    }
    
    accordionList.forEach(item => {
      item.addEventListener('click', activeAccordion)
    })
  }
}

initAccordion()

/* Dropdown Menu */
function handleClick(event) {
  event.preventDefault()

  this.classList.add('active')

  outsideClick(this, ['touchstart', 'click'],() => {
    this.classList.remove('active')
  })
}

function outsideClick(element, events, callback) {
  const html = document.documentElement
  const outside = 'data-outside'

  if(!element.hasAttribute(outside)) {
    events.forEach(userEvent => {
      setTimeout(() => {
        html.addEventListener(userEvent, handleOutsideClick)
      })
    })
    element.setAttribute(outside, '')
  }

  function handleOutsideClick(event) {
    if(!element.contains(event.target)) {
      element.removeAttribute(outside)
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick)
      })
      
      callback()
    }
  }
}

function initDropDown() {
  const dropDownMenus = document.querySelectorAll('[data-dropdown]')

  dropDownMenus.forEach(menu => {
    ['touchstart', 'click'].forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick)
    })
  })
}

initDropDown()

/* Mobile Menu */
function initMenuMobile() {
  const menuButton = document.querySelector('[data-menu="button"]')
  const menuList = document.querySelector('[data-menu="list"]')

  function openMenu() {
    menuList.classList.add('active')
    menuButton.classList.add('active')
    
    outsideClick(menuList, ['click', 'touchstart'], () => {
      menuList.classList.remove('active')
      menuButton.classList.remove('active')
    })
  }

  ['click', 'touchstart'].forEach(e => menuButton.addEventListener(e, openMenu)) 
}

initMenuMobile()