const openButton = document.querySelector('[data-modal="open"]')
const closeButton = document.querySelector('[data-modal="close"]')
const containerModal = document.querySelector('[data-modal="container"]')

if(openButton && closeButton && containerModal) {
  function toogleModal(event) {
    event.preventDefault()
  
    containerModal.classList.toggle('active')
  }
  
  function closeModalOutsiteIt(event) {
    if(event.target === this) {
      toogleModal(event)
    }
  }
  
  openButton.addEventListener('click', toogleModal)
  closeButton.addEventListener('click', toogleModal)
  containerModal.addEventListener('click', closeModalOutsiteIt)
}
