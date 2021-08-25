/* Dropdown Menu */
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

export default class DropdownMenu {
  constructor(menus, events) {
    this.dropDownMenus = document.querySelectorAll(menus)
    this.activeClass = 'active'
    
    if (events === undefined) this.events = ['touchstart', 'click']
    else this.events = events

    this.activeDropdownMenu = this.activeDropdownMenu.bind(this)
  }

  activeDropdownMenu(event) {
    event.preventDefault()
    
    const element = event.currentTarget
    element.classList.add(this.activeClass)
  
    outsideClick(element, this.events,() => {
      element.classList.remove(this.activeClass)
    })
  }

  addDropdownMenusEvent() {
    this.dropDownMenus.forEach(menu => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu)
      })
    })
  }

  init() {
    if(this.dropDownMenus.length) {
      this.addDropdownMenusEvent()
    }

    return this
  }
}

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