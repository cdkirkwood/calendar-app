import axios from 'axios'

const GET_USER = 'GET_USER'

const getUser = user => {
  const action = {type: GET_USER, user}
  return action
}

export const fetchUser = () => async(dispatch) => {
  const response = await axios.get('/api/users/1')
  dispatch(getUser(response.data))
}

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER:
      return action.user
    default:
      return state
  }
}

export default userReducer