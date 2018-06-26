import React from 'react'
import { NavLink } from 'react-router-dom'
import Modal from './EventModal'
import { connect } from 'react-redux'
import moment from 'moment'
import './SingleDay.css'


const SingleDay = props => {
  const day = props.day
  const month = props.month
  const events = props.events.filter(event => {
    const eventDay = +moment(event.start).format('D')
    const eventMonth = moment(event.start).format('MMMM')
    return day === eventDay && month === eventMonth
  })
  return (
    <div className='single-day'>
      <NavLink to={`/day/${month}/${day}`} className='date'>{day}</NavLink>
      <div className='modal-view'>
        {events.map((event, index) => {
          if (index > 1) return <NavLink key={event.id} to={`/day/${month}/${day}`}>{`+${events.length - 2} more`}</NavLink>
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

