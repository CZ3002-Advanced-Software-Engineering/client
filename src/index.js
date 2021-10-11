import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { positions, Provider as AlertProvider, transitions } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import App from './App'
import { store } from './store/store'

const options = {
    position: positions.BOTTOM_CENTER,
    timeout: 5000,
    offest: '30px',
    transition: transitions.SCALE,
}

ReactDOM.render(
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AlertProvider template={AlertTemplate} {...options}>
        <Provider store={store}>
            <App />
        </Provider>
    </AlertProvider>,
    document.getElementById('root')
)