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