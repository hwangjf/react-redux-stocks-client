export const getAllStocks = () => {

  return dispatch => {
  // fetch all stocks here
  // add to global store
  // debugger

  // console.log(dispatch)
  fetch('http://localhost:3001/stocks')
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'GET_ALL_STOCKS', payload: data})
    })
  }
}

export const login = {
  type: 'LOGIN'
}