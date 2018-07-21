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

  componentDidMount = () => {
    const event = this.props.events.find(event => event.id === +this.props.match.params.id)
    this.setState({
      event: event,
      title: event.title,
      description: event.description,
      startDate: moment(event.start).format('YYYY-MM-DD'),
      startTime: moment(event.start).format('HH:mm'),
      endTime: moment(event.end).format('HH:mm')
    })
  }

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit = evt => {
    evt.preventDefault()
    const { title, description, startDate, startTime, endTime } = this.state
    const start = `${startDate} ${startTime}`
    const end = `${startDate} ${endTime}`
    const updatedEvent = { title, description, start, end }
    this.props.updateEvent(updatedEvent, this.props.match.params.id)
  }

  render () {
    const event = this.state.event
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