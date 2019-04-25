// import types

const initialState = null

const stocksReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {user: 'Mother Function'}
    default:
      return state
  }
}