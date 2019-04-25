import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
import {connect} from 'react-redux'
import { login } from './actions'

class App extends Component {
  
  componentDidMount() {
    // dispatch a POJO directly to the store
    this.props.dispatch(login)
  }


  // OPTION 2
  // componentDidMount() {
    // trigger function that is connected and invoked with dispatch(login)
  //   this.props.login()
  // }

  render() {
    console.log(this.props)
    return (
      <div>
        <Header/>
        <MainContainer/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  // the global state
  console.log('STATE IN APP:', state)
  return {
    state
  }
}

// OPTION 1
export default connect(mapStateToProps)(App)


// OPTION 2
// const mapDispatchToProps = dispatch => {
//   return {
//     login: () => dispatch(login)
//   }
// }
// OPTION 2
// export default connect(mapStateToProps, mapDispatchToProps)(App)
