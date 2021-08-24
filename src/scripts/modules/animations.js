/* Slowly Scroll */
function initSlowlyScroll() {
  const insideLinks = document.querySelectorAll('.js-menu a[href^="#"]')
  
  function scrollToSection(event) {
    event.preventDefault()
  
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
  
    const browser = window
    console.log(browser)

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  
  insideLinks.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })
}

// initSlowlyScroll()

/* Scroll Animation */
function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll')
  const windowHalf = window.innerHeight / 2

  if(sections.length) {
    function animationScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = (sectionTop - windowHalf) < 0
    
        if (isSectionVisible) {
          section.classList.add('active')
        } else {
          section.classList.remove('active')
        }
      })
    }
    animationScroll()
    
    window.addEventListener('scroll', animationScroll)
  }
}

// initScrollAnimation()

/* Navegation Tab */
function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-tab="menu"] li')
  const tabContent = document.querySelectorAll('[data-tab="content"] section')

  if (tabMenu.length && tabContent.length) {
    function activeTab(index) {
      tabContent.forEach(section => {
        section.classList.remove('active')
      })
      const direction = tabContent[index].dataset.anime
      tabContent[index].classList.add('active', direction)
    }
  
    tabMenu.forEach((li, index) => {
      li.addEventListener('click', () => activeTab(index))
    })
  }
}

// initTabNav()

/* Accordion List */
function initAccordion() {
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt')

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

// initAccordion()

/* Slowly Scroll */
function SlowlyScroll() {
  const insideLinks = document.querySelectorAll('[data-anime="slowly"] a[href^="#"]')
  
  function scrollToSection(event) {
    event.preventDefault()
  
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  
  insideLinks.forEach(link => {
    link.addEventListener('click', scrollToSection)
  })
}

// SlowlyScroll()

/* Scroll Animation */
function ScrollAnimation() {
  const sections = document.querySelectorAll('[data-anime="scroll"]')
  const windowHalf = window.innerHeight / 2

  if(sections.length) {
    function animationScroll() {
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = (sectionTop - windowHalf) < 0
    
        if (isSectionVisible) {
          section.classList.add('active')
        } else if(section.classList.contains('active')) {
          section.classList.remove('active')
        }
      })
    }
    animationScroll()
    
    window.addEventListener('scroll', animationScroll)
  }
}



/* Numbers Animations */
export default class NumbersAnimation {
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers)
    this.observerTarget =  document.querySelector(observerTarget)
    this.observerClass = observerClass

    this.handleMutation = this.handleMutation.bind(this)
  }

  static incrementNumbert(number) {
    let start = 0
      
    const total = +number.innerText
    const increment = Math.floor(total / 100)

    const timer = setInterval(() => {
      start += increment
      number.innerText = start 
      if(start > total) {
        number.innerText = total
        clearInterval(timer)
      }
    }, 25 * Math.random())
  }

  numbersAnimation() {
    this.numbers.forEach(number => this.constructor.incrementNumbert(number))
  }


  handleMutation(mutation){
    if(mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect()
      this.numbersAnimation()
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation)
    this.observer.observe(this.observerTarget, {attributes: true})
  }

  init() {
    if(this.numbers.length && this.observerTarget) {
      this.addMutationObserver()
    }
  }
}