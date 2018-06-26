import React from 'react'
import { Button, Header, Modal } from 'semantic-ui-react'
import EditButton from './EditButton'
import AddButton from './AddButton'
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
        </Modal.Description>
      </Modal.Content>
      <Modal.Content>
        <NavLink to={`/events/edit/${event.id}`}>
          <EditButton />
        </NavLink>
        <DeleteButton eventId={event.id} />
      </Modal.Content>
    </Modal>
    : <h3>...Loading</h3>
}

export default ModalExampleTopAligned
