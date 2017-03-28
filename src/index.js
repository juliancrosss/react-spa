import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'
import Apps from './components/Apps'

import '../public/css/bootstrap/css/bootstrap.min.css'
import '../public/css/font-awesome/css/font-awesome.css'
import '../public/css/animate.css'
import '../public/css/app.css'


let store = createStore(todoApp)
/*
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)*/

render(<Apps />,document.getElementById('root'))