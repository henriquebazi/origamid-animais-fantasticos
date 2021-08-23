import NumbersAnimation from './animations.js'

async function initFetchAnimais(url) {
  const numbersGrid = document.querySelector('.numbers-grid')
  
  try {
    const animalsResponse = await fetch(url)
    const animalsJSON = await animalsResponse.json()

    function createAnimal(animal) {
      const div = document.createElement('div')  
      
      div.classList.add('animal-number')
      div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`

      return div
    }

    animalsJSON.forEach(animal => {
      const divAnimal = createAnimal(animal)
      
      numbersGrid.appendChild(divAnimal)
    })

    const numbersAnimation = new NumbersAnimation('[data-number]', '.numbers', 'active')
    numbersAnimation.init()

  } catch(error) {
    console.log(error)
  }
}

initFetchAnimais('../../public/animaisapi.json')

async function initFetchBitcoin(url) {
  const btcPrice = document.querySelector('.btc-price')
  
  try {
    const getBitcoinPrice = await fetch(url)
    const response = await getBitcoinPrice.json()
    
    btcPrice.innerText = (1000 / response.BRL.sell).toFixed(4)
  } catch(error) {
    console.log(error)
  }
}

initFetchBitcoin('https://blockchain.info/ticker')