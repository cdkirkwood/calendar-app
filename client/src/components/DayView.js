import React from 'react'
import EventModal from './EventModal'
import moment from 'moment'
import AddButton from './AddButton'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const DayView = props => {
  const date = props.routeProps.match.params.date
  const day = props.days.find(day => day.date === +date)
  const events = props.events.filter(event => {
    const formattedDate = +moment(event.start).format('D')
    return day.date === formattedDate
  })
  return day ?
    <div className="day-view-container">
      <h3>{`Feb ${day.date}`}</h3>
      {events.map(event => (
        <EventModal event={event} key={event.id} />
      ))}
      <NavLink to='/events/add'>
        <AddButton />
      </NavLink>
    </div>
    : <h3>...Loading</h3>
};

const mapState = state => ({ events: state.events })

const DayViewContainer = connect(mapState)(DayView)

export default DayViewContainer
