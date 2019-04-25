import React, { Component } from 'react';
import Stock from '../components/Stock'
import { connect } from 'react-redux'
import { getAllStocks } from '../actions'

class StockContainer extends Component {

  render() {
    return (
      <div>
        <h2>Stocks</h2>
        {
          //render the list of stocks here
        }
      </div>
    );
  }
}

function mapDispatchToProps() {

}

function mapStateToProps() {

}

export default connect(mapStateToProps, mapDispatchToProps)(StockContainer);
