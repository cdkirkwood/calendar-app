import React, { Component } from 'react'
import EventModal from './EventModal'
import axios from 'axios'
import moment from 'moment'
import { connect } from 'react-redux'

/*
class DayView extends Component {

  render() {
    const date = this.props.routeProps.match.params.date
    const day = this.props.days.find(day => day.date === +date)
    const events = props.events.filter(event => {
      const formattedDate = +moment(event.start).format('D')
      return day.date === date
    })
    return (
      day ?
      <div className="day-view-container">
        <h3>{`Feb ${day.date}`}</h3>
          {day.events.map(event => (
            <EventModal event={event} key={event.id} />
          ))}
      </div>
      : <h3>...Loading</h3>
    )
  }

}
*/

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
    </div>
    : <h3>...Loading</h3>
};

const mapState = state => ({ events: state.events })

const DayViewContainer = connect(mapState)(DayView)

export default DayViewContainer
