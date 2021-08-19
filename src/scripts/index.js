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