import React, { Component } from 'react';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
import { MonthView, DayView, AddEvent, UpdateEvent } from './components'
import { fetchUser, fetchEvents } from './store'
import { connect } from 'react-redux'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      days: [],
    }
  }
  componentDidMount = async () => {
    this.props.loadData()
  }

  render() {
    return(
    <Switch className='container'>
    <Route exact path='/' component={MonthView} />
    <Route path='/day/:month/:day' render={(routeProps) => <DayView routeProps={routeProps}/>}/>
    <Route path='/events/add' component={AddEvent} />
    <Route path='/events/edit/:id' component={UpdateEvent} />
    <Route component={MonthView} />
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

