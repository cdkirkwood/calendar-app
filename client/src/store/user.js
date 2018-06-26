import axios from 'axios'
//error-handling middleware I wrote for async functions on the front end
import asyncCatcher from 'async-handler-middleware'

const GET_USER = 'GET_USER'

const getUser = user => {
  const action = {type: GET_USER, user}
  return action
}

export const fetchUser = () => asyncCatcher(async(dispatch) => {
  const response = await axios.get('/api/users/1')
  dispatch(getUser(response.data))
})

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user
    default:
      return state
  }
}

export default userReducer