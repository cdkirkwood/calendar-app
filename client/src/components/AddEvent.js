import React, { Component } from 'react'

export default class UpdateTodo extends Component {
  constructor () {
    super()
    this.state = {
      title: '',
      description: '',
      start: '',
      end: ''
    }
  }

  // componentWillReceiveProps (nextProps) {
  //   if (!this.state.taskName && nextProps.todo.taskName) {
  //     this.setState({
  //       taskName: nextProps.todo.taskName,
  //       assignee: nextProps.todo.assignee,
  //       warningMessage: 'Field is required!'
  //       // note: it's preferable to only set the warning message here rather than hard-code it
  //       // as a prop so that we avoid "flashing" it when the component initially renders
  //     })
  //   }
  // }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
  }

  render () {
    return (
      <Form
        {...this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}
