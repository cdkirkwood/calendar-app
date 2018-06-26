import React from 'react'
import { NavLink } from 'react-router-dom'
import Modal from './EventModal'
import { connect } from 'react-redux'
import moment from 'moment'
import './SingleDay.css'


const SingleDay = props => {
  const day = props.day
  const events = props.events.filter(event => {
    const date = +moment(event.start).format('D')
    return day.date === date
  })
  return (
    <div className='single-day' key={day.date}>
      <NavLink to={`/day/${day.date}`} className='date'>{day.date}</NavLink>
      <div className='events-month-view'>
        {events.map((event, index) => {
          if (index > 1) return <NavLink to={`/day/${day.date}`}>{`+${events.length - 2} more`}</NavLink>
          else return <Modal key={event.id} event={event} />
        }
        )}
      </div>
    </div>
  )
}

const mapState = state => ({ events: state.events })

const SingleDayContainer = connect(mapState)(SingleDay)

export default SingleDayContainer

