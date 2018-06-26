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
    const userId = this.props.user.id
    const { title, description, startDate, startTime, endTime } = this.state
    const start = `${startDate} ${startTime}`
    const end = `${startDate} ${endTime}`
    const newEvent = { title, description, start, end, userId }
    this.props.createEvent(newEvent)
  }

  render () {
    return (
      <EventForm
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapState = state => ({user: state.user})

const mapDispatch = dispatch => ({
  createEvent: newEvent => dispatch(createEvent(newEvent))
})

const EventFormContainer = connect(mapState, mapDispatch)(AddEvent)

export default EventFormContainer
