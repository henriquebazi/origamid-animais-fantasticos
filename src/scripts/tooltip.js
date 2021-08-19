function initTooltip() {
  const tooltips = document.querySelectorAll('[data-tooltip]')

  function createTooltipBox(element) {
    const tooltipBox = document.createElement('div')
    const text = element.getAttribute('aria-label')

    tooltipBox.classList.add('tooltip')
    tooltipBox.innerText = text

    document.body.appendChild(tooltipBox)
    return tooltipBox
  }
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove()
      this.element.removeEventListener('mouseleave', onMouseLeave)
      this.element.removeEventListener('mouseleave', onMouseMove)
    }
  }

  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + 'px'
      this.tooltipBox.style.left = event.pageX + 20 + 'px'
    }
  }

  function onMouseOver(event) {
    const tooltipBox = createTooltipBox(this)

    onMouseMove.tooltipBox = tooltipBox
    onMouseLeave.tooltipBox = tooltipBox
    onMouseLeave.element = this

    this.addEventListener('mouseleave', onMouseLeave)
    this.addEventListener('mousemove', onMouseMove)
  }

  tooltips.forEach(item => {
    item.addEventListener('mouseover', onMouseOver)
  })
}

initTooltip()