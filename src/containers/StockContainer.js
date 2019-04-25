import React, { Component } from 'react';
import Stock from '../components/Stock'
import { connect } from 'react-redux'
import getAllStocks from '../actions'

const StockContainer = props => {
  console.log(props)
  
  return (
    <div>
      <h2>Stocks</h2>
    </div>
  );
}

// function mapDispatchToProps() {

// }

// function mapStateToProps() {

// }

export default connect()(StockContainer)
