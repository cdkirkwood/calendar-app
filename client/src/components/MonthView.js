import React, { Component } from 'react'
import SingleDay from './SingleDay'
import AddOrEditButton from './AddOrEditButton'
import { Grid, GridColumn } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'
import moment from 'moment'
import StepButton from './StepButton'
import './MonthView.css'

export default class MonthView extends Component {
  constructor() {
    super()
    this.state = {
      dateContext: moment()
    }
  }

  month = () => this.state.dateContext.format('MMMM')

  daysInMonth = () => this.state.dateContext.daysInMonth()

  step = (direction, curMonth, allMonths) => {
    const curMonthIndex = allMonths.indexOf(curMonth)
    if (direction === 'left' && curMonthIndex === 0) return
    if (direction === 'right' && curMonthIndex === 11) return
    const newMonthIndex = direction === 'left' ? curMonthIndex - 1 : curMonthIndex + 1
    const dateContext = { ...this.state.dateContext }
    const newContext = moment(dateContext).set('month', newMonthIndex)
    this.setState({ dateContext: newContext })

  }

  firstDayOfMonth = () => {
    const dateContext = this.state.dateContext
    const firstDay = moment(dateContext).startOf('month').format('d')
    return firstDay
  }

  calculateBlanks = () => {
    const blanks = []
    for (let i = 0; i < this.firstDayOfMonth(); i++) {
      blanks.push('')
    }
    return blanks
  }

  generateDays = () => {
    const blanks = this.calculateBlanks()
    const days = []
    for (let i = 1; i <= this.daysInMonth(); i++) {
      days.push(i)
    }
    return [...blanks, ...days]
  }


  render() {
    const days = this.generateDays()
    const daysOfWeek = moment.weekdays()
    const months = moment.months()
    const curMonth = this.month()
    return (
      <div>
        <div className='month-view-header'>
          <StepButton icon={'arrow circle left'} color={'blue'} step={this.step} curMonth={curMonth} direction={'left'} allMonths={months} />
          <h3>{curMonth}</h3>
          <StepButton icon={'arrow circle right'} color={'blue'} step={this.step} curMonth={curMonth} direction={'right'} allMonths={months} />
        </div>
        <NavLink to='/events/add' className='add-button'>
          <AddOrEditButton color={'green'} icon={'plus circle'} />
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
            {days.map((day, index) => (
              <Grid.Column key={index} className='single-day'>
                <SingleDay day={day} month={curMonth} />
              </Grid.Column>
            ))}
          </Grid.Row>

        </Grid>
      </div>
    )
  }
}
