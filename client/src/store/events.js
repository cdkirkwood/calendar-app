import axios from 'axios'
import history from '../history'
import { convertEventTimes, convertDate, convertDay } from '../date-conversions'
//error-handling middleware I wrote for async functions on the front end
import asyncCatcher from 'async-handler-middleware'

//Actions
const GET_EVENTS = 'GET_EVENTS'
const ADD_EVENT = 'ADD_EVENT'
const ALTER_EVENT = 'ALTER_EVENT'
const REMOVE_EVENT = 'REMOVE_EVENT'

//Action creators
export const getEvents = events => {
  const convertedEvents = convertEventTimes(events)
  const action = { type: GET_EVENTS, events: convertedEvents }
  return action
}

export const addEvent = event => {
  const convertedEvent = convertDate(event)
  const action = { type: ADD_EVENT, event: convertedEvent }
  return action
}

export const alterEvent = event => {
  const convertedEvent = convertDate(event)
  const action = { type: ALTER_EVENT, event: convertedEvent }
  return action
}

export const removeEvent = eventId => {
  const action = { type: REMOVE_EVENT, eventId }
  return action
}

//Thunks
export const fetchEvents = () => asyncCatcher(async (dispatch) => {
  const response = await axios.get('/api/events')
  dispatch(getEvents(response.data))
})

export const createEvent = event => asyncCatcher(async (dispatch) => {
  const response = await axios.post('/api/events', event)
  dispatch(addEvent(response.data))
  const day = convertDay(response.data.start)
  history.push(`/day/${day}`)
})

export const updateEvent = (event, id) => asyncCatcher(async (dispatch) => {
  const response = await axios.put(`/api/events/${id}`, event)
  dispatch(alterEvent(response.data))
  const day = convertDay(response.data.start)
  history.push(`/day/${day}`)
})

export const deleteEvent = id => asyncCatcher(async (dispatch) => {
  await axios.delete(`/api/events/${id}`)
  dispatch(removeEvent(id))
  history.push(`/`)
})

const eventReducer = (state = [], action) => {
  switch (action.type) {
    case GET_EVENTS:
      return action.events
    case ADD_EVENT:
      return [...state, action.event]
    case ALTER_EVENT:
      const filteredState = state.filter(event => event.id !== action.event.id)
      return [...filteredState, action.event]
    case REMOVE_EVENT:
      return state.filter(event => event.id !== action.eventId)
    default:
      return state
  }
}
export default eventReducer