import React, { Component } from 'react'
import SingleDay from './SingleDay'
import AddButton from './AddButton'
import { Grid, GridColumn } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

export default class MonthView extends Component {
  render() {
    const days = this.props.days || []
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return (
      <div>
      <NavLink to='/events/add' className='add-button'>
      <AddButton />
      </NavLink>
      <Grid columns={7} divided>
        <Grid.Row>
          {daysOfWeek.map((day, index) => (
            <GridColumn key={index}>
              {day}
            </GridColumn>
          ))}
        </Grid.Row>
        <Grid.Row>
        {this.props.days.map(day => (
          <Grid.Column key={day.date} className='single-day'>
            <SingleDay day={day} />
          </Grid.Column>
        ))}
        </Grid.Row>
        
      </Grid>
      </div>
    )
  }
}
