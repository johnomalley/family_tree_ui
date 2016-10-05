import React from 'react'
import {Provider} from 'react-redux'
import createStore from '../state/createStore'
import {fetchFamily} from '../state/actions'
import App from './App'

const store = createStore()

store.dispatch(fetchFamily('omalley'))

const Main = () => (
    <Provider store={store}>
        <App/>
    </Provider>
)

export default Main
