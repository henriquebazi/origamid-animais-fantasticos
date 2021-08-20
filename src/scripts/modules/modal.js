export default class Modal {
  constructor(openButton, closeButton, modalContainer) {
    this.openButton = document.querySelector(openButton)
    this.closeButton = document.querySelector(closeButton)
    this.containerModal = document.querySelector(modalContainer)

    this.eventToogleModal = this.eventToogleModal.bind(this)
    this.closeModalOutsideIt = this.closeModalOutsideIt.bind(this)
  }

  toogleModal() { 
    this.containerModal.classList.toggle('active')
  }

  eventToogleModal(event) {
    event.preventDefault()
    this.toogleModal()
  }

  closeModalOutsideIt(event) {
    if(event.target === this.containerModal) {
      this.toogleModal()
    }
  }

  addModalEvents() {
    this.openButton.addEventListener('click', this.eventToogleModal)
    this.closeButton.addEventListener('click', this.eventToogleModal)
    this.containerModal.addEventListener('click', this.closeModalOutsideIt)
  }
  
  init() {
    if(this.openButton && this.closeButton && this.containerModal) {
      this.addModalEvents()
    }

    return this
  }
}