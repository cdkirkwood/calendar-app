import React, { Component } from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'

class EventForm extends Component {

  render() {
    const event = this.props.event
    return (
      <Form>
        <h1>Add Event</h1>
        <Form.Field
          control={Input}
          label='Title'
          placeholder='Title'
        />
        <Form.Field
          control={TextArea}
          label='Description'
          placeholder='Description'
        />
        <div>
          <label className='form-date-label'>Start</label>
          <input type='date' />
        </div>
        <div>
          <label className='form-date-label'>End</label>
          <input type='date' />
        </div>
        <Form.Field
          control={Button}
          content='Submit'
        />
      </Form>
    )
  }
}

export default EventForm