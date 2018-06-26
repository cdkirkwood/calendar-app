import React from 'react'
import { Button, Icon } from 'semantic-ui-react'
import { deleteEvent } from '../store'
import { connect } from 'react-redux'

const DeleteButton = (props) => (
  <Button icon color='red' onClick={() => props.deleteEvent(props.eventId)}>
    <Icon name='remove circle' />
  </Button>
)

const mapDispatch = dispatch => ({
  deleteEvent: eventId => dispatch(deleteEvent(eventId))
})

const DeleteButtonWrapper = connect(null, mapDispatch)(DeleteButton)

export default DeleteButtonWrapper