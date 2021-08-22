export default class Tooltip {
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips)

    this.onMouseLeave = this.onMouseLeave.bind(this)
    this.onMouseMove = this.onMouseMove.bind(this)
    this.onMouseOver = this.onMouseOver.bind(this)
  }

  createTooltipBox(element) {
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')

    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text

    document.body.appendChild(tooltipBox)
    this.tooltipBox = tooltipBox
  }
  onMouseLeave(event) {
    this.tooltipBox.remove()
    event.currentTarget.removeEventListener('mouseleave', this.onMouseLeave)
    event.currentTarget.removeEventListener('mouseleave', this.onMouseMove)
  }

  onMouseMove(event) {
    this.tooltipBox.style.top = event.pageY + 20 + 'px'
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = event.pageX - 190 + 'px'
    } else {
      this.tooltipBox.style.left = event.pageX + 20 + 'px'
    }
  }
  
  onMouseOver(event) {
    this.createTooltipBox(event.currentTarget)
    event.currentTarget.addEventListener('mouseleave', this.onMouseLeave)
    event.currentTarget.addEventListener('mousemove', this.onMouseMove)
  }

  addTootipsEvent() {
    this.tooltips.forEach(item => {
      item.addEventListener('mouseover', this.onMouseOver)
    })
  }

  init() {
    if(this.tooltips.length) {
      this.addTootipsEvent()
    }

    return this
  }
}