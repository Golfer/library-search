import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, compose, createStore} from "redux";
import thunk from "redux-thunk";
import {Provider} from "react-redux";
import AppRoot from '../components/AppRoot'
import rootReducer from '../store/rootReducer'

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;

const store = createStore(
    rootReducer,
    composeEnhancers(
        applyMiddleware(
            thunk
        )
    )
)

const application = (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoot />
      </BrowserRouter>
    </Provider>
)
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      application,
      document.getElementById('reactRoot')
  )
})
