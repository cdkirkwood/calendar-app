import React from 'react'
import { NavLink } from 'react-router-dom'
import Modal from './EventModal'
import { connect } from 'react-redux'
import moment from 'moment'

const SingleDay = props => {
  const day = props.day
  const events = props.events.filter(event => {
    const date = +moment(event.start).format('D')
    return day.date === date
  })
  return (
    <div className='single-day' key={day.date}>
      <NavLink to={`/day/${day.date}`} className='date'>{day.date}</NavLink>
      {events.map(event => {
        return <Modal key={event.id} event={event} />
      }
      )}
    </div>
  )
}

const mapState = state => ({ events: state.events })

const SingleDayContainer = connect(mapState)(SingleDay)

export default SingleDayContainer

