import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import Root from './containers/Root'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import '../node_modules/bootstrap-scss/bootstrap.scss';
import * as serviceWorker from './serviceWorker';
import "./scss/styles.scss";

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
  <Router>
    <Provider store={store}>
      <Root store={store} />
    </Provider>
  </Router>,
  document.getElementById('root')
)

serviceWorker.register();
