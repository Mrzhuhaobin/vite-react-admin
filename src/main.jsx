import React from 'react'
import { BrowserRouter } from "react-router-dom";
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import './index.scss';
import 'antd/dist/antd.css';
import './style/myTheme.scss';
import RouterJump from '@/components/RouteJump.jsx'
import store from './store';
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <RouterJump/>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
