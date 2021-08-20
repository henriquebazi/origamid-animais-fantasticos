/* Working Time*/
function initWorkingTime() {
  const working = document.querySelector('[data-week]')
  const weekDays = working.dataset.week.split(',')
    .map(Number)
  const workingTime = working.dataset.time.split(',')
    .map(Number)

  const thisMoment = new Date()
  const thisDay = thisMoment.getDay()
  const thisTime = thisMoment.getHours()

  const isOpenToday = weekDays.indexOf(thisDay) !== -1
  const isOpenNow = thisTime >= workingTime[0] && thisTime < workingTime[1]
  
  if(isOpenToday && isOpenNow) {
    working.classList.add('open')
  }
}

initWorkingTime()


/*modules*/
import SlowlyScroll from './modules/slowly-scroll.js'
// import initScrollAnimation from './modules/scroll-animation.js'
import Accordion from './modules/accordion.js'
// import initTabNav from './modules/tabnav.js'
// import initModal from './modules/modal.js'
// import initTooltip from './modules/tooltip.js'
// import initDropdownMenu from './modules/dropdown.js'
// import initMenuMobile from './modules/mobile.js'
// import initFuncionamento from './modules/start.js'
// import initFetchAnimals from './modules/fetch.js'
// import initFetchBitcoin from './modules/fetch-bitcoin.js'

const slowlyScroll = new SlowlyScroll('.js-menu a[href^="#"]')
slowlyScroll.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()



// initScrollAnimation()
// initTabNav()
// initModal()
// initTooltip()
// initDropdownMenu()
// initMenuMobile()
// initFuncionamento()
// initFetchAnimals()
// initFetchBitcoin()
