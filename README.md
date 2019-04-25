## Flatiron Stock Exchange

Welcome to the Flatiron Stock Exchange!
Today, you are a broker who is trying to better organize the stocks available on the Flatiron Stock Market.
The database of stocks can be found in a JSON-server, so before you start your React server, make sure to start your JSON-server on `http://localhost:3001/stocks`.

```
TO INSTALL: npm install -g json-server
TO START: json-server --watch db.json -p 3001
```

Using Redux
* consider what is needed: store, provider, createStore, reducer, combineReducers, action types, action creators, connect/dispatch and (if you want) redux-thunk

After the stocks are fetched, your job is to:
* Add all stocks to the Redux store
* Grab them all in Stock Container and render all Stocks
* allow a user to buy a stock by clicking on it and when it is bought
  * it should be added to an array for the user
  * it should be rendered in `My Portfolio`
* allow a user to sell a stock in their `Portfolio` by clicking on the stock - this should remove the stock from their `Portfolio`

Things to come:
* we are going to add a separate backend that we are going to add auth in for tomorrow
