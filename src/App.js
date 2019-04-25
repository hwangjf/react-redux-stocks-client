import React, { Component } from 'react';
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <MainContainer/>
      </div>
    );
  }
}

export default connect()(App)
