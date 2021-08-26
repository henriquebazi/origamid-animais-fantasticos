/* Working Time*/
export default class WorkingTime {
  constructor(week, activeClass) {
    this.working = document.querySelector(week)
    this.activeClass = activeClass
  }

  workingData() {
    this.weekDays = this.working.dataset.week.split(',').map(Number)
    this.workingTime = this.working.dataset.time.split(',').map(Number)
  }

  dateNow() {
    this.moment = new Date()
    this.day = this.moment.getDay()
    this.time = this.moment.getUTCHours() - 3
  }

  isOpen() {
    this.isOpenToday = this.weekDays.indexOf(this.day) !== -1
    this.isOpenNow = this.time >= this.workingTime[0] && this.time < this.workingTime[1]

    return this.isOpenToday && this.isOpenNow
  }

  activeWhenOpen() {
    if(this.isOpen()) {
      this.working.classList.add(this.activeClass)
    }
  }

  init() {
    if(this.working) {
      this.workingData()
      this.dateNow()
      this.activeWhenOpen()
    }

    return this
  }  
}
