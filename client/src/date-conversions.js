import moment from 'moment'

export const convertDate = event => {
  event.startDate = moment(event.start).format('dddd, MMMM Do YYYY')
  event.startTime = moment(event.start).format('LT')
  event.endTime = moment(event.end).format('LT')
  event.day = convertDay(event.start)
  return event
}

export const convertEventTimes = events => {
  const convertedEvents = events.map(event => convertDate(event))
  return convertedEvents
}

export const convertDay = date => +moment(date).format('D')