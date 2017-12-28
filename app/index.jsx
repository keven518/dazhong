import React from 'react'
import { render } from 'react-dom'
import { hashHistory } from 'react-router'

import RouteMap from './router/routeMap'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'

// 通用样式
import './static/css/common.less'
import './static/css/font.css'
// import fn from './redex-demo.js'
// fn()
const store = configureStore()

// import Todo from './containers/Todo';

// 性能测试
// import Perf from 'react-addons-perf'
// if (__DEV__) {
//     window.Perf = Perf
// }

render(
  <Provider store={store}>
    <RouteMap history={hashHistory} />
  </Provider>,
  document.getElementById('root')
)
