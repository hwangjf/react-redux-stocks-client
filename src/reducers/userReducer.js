// import types

const initialState = null

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {user: 'Mother Function'}
    default:
      return state
  }
}

export default stocksReducer