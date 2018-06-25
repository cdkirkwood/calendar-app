import axios from 'axios'
import moment from 'moment'

const GET_EVENTS = 'GET_EVENTS';

const convertDate = event => {
  event.startDate = moment(event.start).format('dddd, MMMM Do YYYY')
  event.startTime = moment(event.start).format('LT')
  event.endTime = moment(event.end).format('LT')
  return event
}

const convertEventTimes = events => {
  const convertedEvents = events.map(event => convertDate(event))
  return convertedEvents
}

export const getEvents = events => {
  const convertedEvents = convertEventTimes(events)
  const action = { type: GET_EVENTS, events: convertedEvents }
  return action
}

export const fetchEvents = () => async (dispatch) => {
  const response = await axios.get('/api/events')
  dispatch(getEvents(response.data))
}

const eventReducer = (state = [], action) => {
  switch (action.type) {
    case GET_EVENTS:
      return action.events
    default:
      return state
  }
}
export default eventReducer