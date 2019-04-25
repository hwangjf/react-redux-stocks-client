import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
import {connect} from 'react-redux'
import { login } from './actions'

class App extends Component {
  
  componentDidMount() {
    this.props.login()
  }

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

const mapDispatchToProps = dispatch => {
  return {
    login: () => dispatch(login)
  }
}

export default connect(null, mapDispatchToProps)(App)
