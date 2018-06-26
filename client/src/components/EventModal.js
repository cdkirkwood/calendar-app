import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import AddOrEditButton from './AddOrEditButton'
import DeleteButton from './DeleteButton'
import { NavLink } from 'react-router-dom'

const ModalExampleTopAligned = props => {
  const event = props.event
  return event ?
    <Modal
      trigger={<Button>{`${event.startTime} ${event.title}`}</Button>}
      centered={false}
    >
      <Modal.Header>{event.title}</Modal.Header>
      <Modal.Content>
        <Modal.Description>
          <Header>{event.startDate}</Header>
          <p>{`${event.startTime}-${event.endTime}`}</p>
          <p>{event.description}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Content>
        <NavLink to={`/events/edit/${event.id}`}>
          <AddOrEditButton color='blue' icon='edit'/>
        </NavLink>
        <DeleteButton eventId={event.id} />
      </Modal.Content>
    </Modal>
    : <h3>...Loading</h3>
}

export default ModalExampleTopAligned
