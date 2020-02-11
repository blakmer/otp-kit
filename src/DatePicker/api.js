import moment from 'moment'
moment.locale('ru')

class calendarApi {
  constructor(
    dateObject = moment().format('YYYY-MM-DD'),
    format = 'YYYY-MM-DD'
  ) {
    this.currentDate = moment(dateObject, format)
  }

  getWeekDays() {
    return moment.weekdaysShort(true)
  }

  getMonths() {
    return [
      'янв',
      'февр',
      'март',
      'апр',
      'май',
      'июнь',
      'июль',
      'авг',
      'сент',
      'окт',
      'нояб',
      'дек',
    ]
  }

  getYears() {
    const year = parseInt(this.currentDate.format('YYYY'))
    return [
      year - 11,
      year - 10,
      year - 9,
      year - 8,
      year - 7,
      year - 6,
      year - 5,
      year - 4,
      year - 3,
      year - 2,
      year - 1,
      year,
    ]
  }

  getCurrentDate() {
    return moment(this.currentDate.format())
  }

  getMonthCanvas() {
    const firstMonday = moment(this.currentDate.format())
      .startOf('month')
      .weekday(0)
    const lastSunday = moment(this.currentDate.format())
      .endOf('month')
      .weekday(6)
    const count = lastSunday.diff(firstMonday, 'day')
    const monthObject = []
    const current = firstMonday

    let row = 0,
      cell = 0,
      br = true

    while (row <= count) {
      if (br) {
        monthObject.push([])
        br = !br
      }
      monthObject[cell].push({
        day: current.format('D'),
        month: current.format('MM'),
        year: current.format('YYYY'),
      })

      if (current.format('d') === '0') {
        br = !br
        cell++
      }
      current.add(1, 'day')
      row++
    }

    return monthObject
  }

  setPrevMonth() {
    this.currentDate.subtract(1, 'month')
  }

  setNextMonth() {
    this.currentDate.add(1, 'month')
  }

  setMonth(month, format = 'MM') {
    const day = this.currentDate.format('DD')
    const year = this.currentDate.format('YYYY')
    this.currentDate = moment(`${year}-${month}-${day}`, `YYYY-${format}-DD`)
  }

  setPrevYear() {
    this.currentDate.subtract(1, 'year')
  }

  setNextYear() {
    this.currentDate.add(1, 'year')
  }

  setYear(year) {
    const monthDay = this.currentDate.format('MM-DD')
    this.currentDate = moment(`${year}-${monthDay}`)
  }

  setCurrentDate(date, format = 'YYYY-MM-D') {
    if (date.indexOf('_') < 0 && moment(date, format).isValid()) {
      this.currentDate = moment(date, format)
    }
  }
}

export default calendarApi
