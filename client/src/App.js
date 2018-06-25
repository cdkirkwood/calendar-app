import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import { MonthView, DayView, EventForm } from './components'
import { fetchUser, fetchEvents } from './store'
import { connect } from 'react-redux'
import moment from 'moment'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      days: [],
    }
  }
  componentDidMount = async () => {
    this.props.loadData()
    this.generateDays()
  }
  

  generateDays = (events) => {
    const days = []
    for (let i = 0; i < 28; i++) {
      const dayObj = {
        date: i + 1
      }
      days.push(dayObj)
    }
    this.setState(() => ({days}))
  }

  render() {
    return(
    <Switch className='container'>
    <Route exact path='/' render={() => <MonthView days={this.state.days} />} />
    <Route path='/day/:date' render={(routeProps) => <DayView days={this.state.days} routeProps={routeProps}/>}/>
    <Route path='/addEvent' component={EventForm} />
    <Route render={() => <MonthView days={this.state.days} />} />
    </Switch>
    )
  }
}

const mapState = state => ({
  events: state.events
})

const mapDispatch = dispatch => {
  return {
    loadData () {
      dispatch(fetchUser())
      dispatch(fetchEvents())
    }
  }
}

const AppContainer = withRouter(connect(mapState, mapDispatch)(App))

export default AppContainer

