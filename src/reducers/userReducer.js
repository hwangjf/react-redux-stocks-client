// import types

const initialState = null

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      // return the user
      return action.payload
    default:
      return state
  }
}

export default stocksReducer