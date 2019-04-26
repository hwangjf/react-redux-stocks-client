import React, { Component } from 'react'
import Signup from './Signup';
import Login from './Login';
import { connect } from 'react-redux'

class Navbar extends Component {
  render() {
    return (
      <>
        {
          this.props.user
            ? <div>Welcome {this.props.user.username}, your balance is ${this.props.user.balance}</div>
            : <>
                <Signup />
                <Login />
              </>
        }
      </>
    )
  }
}

const mapStateToProps = state => {
  console.log(state)
  debugger
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Navbar)