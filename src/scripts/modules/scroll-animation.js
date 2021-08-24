export default class ScrollAnimation {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.windowHalf = window.innerHeight / 2

    this.animationScroll = this.animationScroll.bind(this)
  }
  
  animationScroll() {
    this.sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top
      const isSectionVisible = (sectionTop - this.windowHalf) < 0
  
      if (isSectionVisible) {
        section.classList.add('active')
      } else if(section.classList.contains('active')) {
        section.classList.remove('active')
      }
    })
  }
  
  init() {
    this.animationScroll()
    window.addEventListener('scroll', this.animationScroll)
    
    return this
  }
}
