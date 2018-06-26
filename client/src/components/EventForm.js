import React, { Component } from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import moment from 'moment'


const EventForm = props => {
  const event = props.event
  const header = event ? 'Edit Event' : 'Add Event'
  return (
    <Form onSubmit={props.handleSubmit}>
      <h1>{header}</h1>
      <Form.Field
      control={Input} 
      label="Title" 
      name="title" 
      defaultValue= {event ? event.title : ''}
      onChange={props.handleChange}
      required
      />
      <Form.Field 
      control={TextArea} 
      label="Description" 
      name="description" 
      defaultValue= {event ? event.description : ''}
      onChange={props.handleChange}
      required
      />
      <div>
        <label className="form-date-label">Date</label>
        <input 
        type="date" 
        name="startDate"
        defaultValue= {event ? moment(event.start).format('YYYY-MM-DD') : ''}
        onChange={props.handleChange}
        required
        />
      </div>
      <div>
        <label className="form-date-label">From</label>
        <input 
        type="time" 
        name="startTime"
        defaultValue= {event ? moment(event.start).format('HH:mm') : ''}
        onChange={props.handleChange}
        required
        />
      </div>
      <div>
        <label className="form-date-label">To</label>
        <input 
        type="time" 
        name="endTime"
        defaultValue= {event ? moment(event.end).format('HH:mm') : ''}
        onChange={props.handleChange}
        required
        />
      </div>
      <Form.Field control={Button} content="Submit" />
    </Form>
  )
}
export default EventForm