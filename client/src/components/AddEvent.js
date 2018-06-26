import React, { Component } from 'react'
import EventForm from './EventForm'
import { connect } from 'react-redux'
import { createEvent } from '../store'

class AddEvent extends Component {
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

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { title, description, startDate, startTime, endTime } = this.state
    const start = `${startDate} ${startTime}`
    const end = `${startDate} ${endTime}`
    const newEvent = { title, description, start, end }
    this.props.createEvent(newEvent)
  }

  render () {
    return (
      <EventForm
        {...this.state}
        event={{}}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapDispatch = dispatch => ({
  createEvent: newEvent => dispatch(createEvent(newEvent))
})

const EventFormContainer = connect(null, mapDispatch)(AddEvent)

export default EventFormContainer
