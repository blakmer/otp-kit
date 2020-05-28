import moment from 'moment'

export const DEFAULT_STATE = { min: 0, max: 24 }

export const STEPS = {
  '60': 1,
  '30': 0.5,
  '15': 0.25,
  '10': 0.166666666666667,
  '5': 0.083333333333333,
  '1': 0.0166666666666667,
}

export const ERRORS = {
  START_INVALID: 'Время начала интервала невалидно',
  END_INVALID: 'Время окончания интервала невалидно',
  INTERVAL_INVALID:
    'Убедитесь, что время начала интервала меньше, чем время окончания',
}

export function transformValueToTotalMinutes(value) {
  return Math.round(value / (1 / 60))
}

export function transformMinutesToValue(minutes) {
  return Math.floor((100 / 60) * minutes)
}

export function timeChecks(value) {
  const regExp = /^\d\d:\d\d$/
  const [startTimeMoment, endTimeMoment] = value.map(time =>
    moment(time, 'HH:mm')
  )

  return {
    startIsValid: startTimeMoment.isValid() && regExp.test(value[0]),
    endIsValid: endTimeMoment.isValid() && regExp.test(value[1]),
    startIsBeforeEnd: startTimeMoment.isBefore(endTimeMoment),
  }
}
