import React from 'react'

const Stock = props => {
  const { stock } = props
  console.log(props)
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{
              stock.name
            }</h5>
          <p className="card-text">{
              stock.price
            }</p>
        </div>
      </div>
    </div>
  );
}

export default Stock
