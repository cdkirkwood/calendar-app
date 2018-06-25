import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const ModalExampleTopAligned = props => {
  const event = props.event
  return (<Modal trigger={<Button>{`${event.startTime} ${event.title}`}</Button>} centered={false}>
    <Modal.Header>{event.title}</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Header>{event.startDate}</Header>
        <p>{`${event.startTime}-${event.endTime}`}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>);
};

export default ModalExampleTopAligned
