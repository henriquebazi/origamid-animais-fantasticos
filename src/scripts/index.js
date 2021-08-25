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
import ScrollAnimation from './modules/scroll-animation.js'
import Accordion from './modules/accordion.js'
import TabNav from './modules/tabnav.js'
import Modal from './modules/modal.js'
import Tooltip from './modules/tooltip.js'
import DropdownMenu from './modules/dropdown.js'
// import initMenuMobile from './modules/mobile.js'
// import initFuncionamento from './modules/start.js'
import { fetchAnimal } from './modules/fetch.js'
import { fetchBitcoin } from './modules/fetch.js'

const slowlyScroll = new SlowlyScroll('[data-anime="slowly"] a[href^="#"]')
slowlyScroll.init()

const accordion = new Accordion('[data-anime="accordion"] dt')
accordion.init()

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section')
tabNav.init()

const modal = new Modal('[data-modal="open"]', '[data-modal="close"]', '[data-modal="container"]')
modal.init()

const tooltip = new Tooltip('[data-tooltip]')
tooltip.init()

const scrollAnimation = new ScrollAnimation('[data-anime="scroll"]')
scrollAnimation.init()

const dropdown = new DropdownMenu('[data-dropdown]')
dropdown.init()

fetchAnimal('../../public/animaisapi.json', '.numbers-grid')
fetchBitcoin('https://blockchain.info/ticker', '.btc-price')
