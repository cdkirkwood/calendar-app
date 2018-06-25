import React, { Component } from 'react'
import SingleDay from './SingleDay'
import { Grid, GridColumn } from 'semantic-ui-react'

export default class MonthView extends Component {
  render() {
    const days = this.props.days || []
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    return (
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
    )
  }
}
