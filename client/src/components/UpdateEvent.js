import React, { Component } from 'react'
import EventForm from './EventForm'
import { connect } from 'react-redux'
import { updateEvent } from '../store'
import moment from 'moment'

class UpdateEvent extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      description: '',
      startDate: '',
      startTime: '',
      endTime: ''
    }
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    const event = this.props.events.find(event => event.id === +this.props.match.params.id)
    const { title, description, startDate, startTime, endTime } = this.state
    const newtitle = title || event.title
    const newDescription = description || event.description
    const newStartDate = startDate || moment(event.start).format('YYYY-MM-DD')
    const newStartTime = startTime || moment(event.start).format('HH:mm')
    const newEndTime = endTime || moment(event.end).format('HH:mm')
    const start = `${newStartDate} ${newStartTime}`
    const end = `${newStartDate} ${newEndTime}`
    const updatedEvent = { title: newtitle, description: newDescription, start, end }
    this.props.updateEvent(updatedEvent, this.props.match.params.id)
  }

  render () {
    const event = this.props.events.find(event => event.id === +this.props.match.params.id)
    return (
      <EventForm
        {...this.state}
        event={event}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapState = state => ({events: state.events})

const mapDispatch = dispatch => ({
  updateEvent: (updatedEvent, id) => dispatch(updateEvent(updatedEvent, id))
})

const UpdateContainer = connect(mapState, mapDispatch)(UpdateEvent)

export default UpdateContainer