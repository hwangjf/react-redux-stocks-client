export const getAllStocks = () => {

  return dispatch => {
  // fetch all stocks here
  // add to global store
  // debugger

  // console.log(dispatch)
  fetch('http://localhost:4000/api/v1/stocks')
    .then(res => res.json())
    .then(data => {
      dispatch({ type: 'GET_ALL_STOCKS', payload: data})
    })
  }
}

export const login = (user) => ({
  type: 'LOGIN', payload: user
})

export const autoLogin = () => {
  return dispatch => {
    fetch('http://localhost:4000/api/v1/auto_login', {
      headers: {
        'Authorization': localStorage.getItem('token')
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.errors) {
          alert(data.errors)
        } else {
          dispatch({ type: 'LOGIN', payload: data.user})
        }
      })
  }
}