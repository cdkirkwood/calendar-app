import React from 'react'
import EventModal from './EventModal'
import moment from 'moment'
import AddOrEditButton from './AddOrEditButton'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import './DayView.css'

const DayView = props => {
  const day = props.routeProps.match.params.day
  const month = props.routeProps.match.params.month
  const events = props.events.filter(event => {
    const eventDay = moment(event.start).format('D')
    const eventMonth = moment(event.start).format('MMMM')
    return day === eventDay && month === eventMonth
  })
  return day ?
    <div className='day-view-container'>
      <div className='day-view-header'>
        <h3>{`${month} ${day}`}</h3>
        <NavLink to={'/'}><h3>Full Calendar</h3></NavLink>
      </div>
      {events.map(event => (
        <EventModal event={event} key={event.id} />
      ))}
      <NavLink to='/events/add'>
        <AddOrEditButton color={'green'} icon={'plus circle'} />
      </NavLink>
      </div>
    : <h3>...Loading</h3>
};

const mapState = state => ({ events: state.events })

const DayViewContainer = connect(mapState)(DayView)

export default DayViewContainer
