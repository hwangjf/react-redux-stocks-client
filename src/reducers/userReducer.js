// import types

const initialState = null

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return action.payload
    default:
      return state
  }
}

export default stocksReducer