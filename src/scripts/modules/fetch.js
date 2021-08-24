import NumbersAnimation from './animations.js'

export function fetchAnimal(url, target) {
  function createAnimalDiv(animal) {
    const div = document.createElement('div')  
    
    div.classList.add('animal-number')
    div.innerHTML = `<h3>${animal.specie}</h3><span data-number>${animal.total}</span>`

    return div
  }

  const numbersGrid = document.querySelector(target)
  function setAnimals(animal) {
    const divAnimal = createAnimalDiv(animal)
        
    numbersGrid.appendChild(divAnimal)
  }

  function animalAnimationNumbers() {
    const numbersAnimation = new NumbersAnimation('[data-number]', '.numbers', 'active')
    numbersAnimation.init()
  }

  async function createAnimal() {
    try {
      const animalsResponse = await fetch(url)
      const animalsJSON = await animalsResponse.json()
      animalsJSON.forEach(animal => setAnimals(animal))
  
      animalAnimationNumbers()  
    } catch(error) {
      console.log(error)
    }
  }

  return createAnimal()
}

export async function fetchBitcoin(url, target) {
  const btcPrice = document.querySelector(target)
  
  try {
    const getBitcoinPrice = await fetch(url)
    const response = await getBitcoinPrice.json()
    
    btcPrice.innerText = (1000 / response.BRL.sell).toFixed(4)
  } catch(error) {
    console.log(error)
  }
}