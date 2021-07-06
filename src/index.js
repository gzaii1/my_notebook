import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Home, Shopping } from './pages/index'
import { Provider } from 'react-redux'
import { store } from './store'

import './styles.less'

const RouteControl = () => {
    return <Router>
        <Switch>
            <Route path="/home" component={Home}></Route>
            <Route path="/shopping" component={Shopping}></Route>
            <Redirect from="/*" to="/home"></Redirect>
        </Switch>
    </Router>
}


const App = () => {
    return <div className="App">
        <Provider store={store}>
            <RouteControl />
        </Provider>
    </div>
}

const root = document.querySelector('#root')
ReactDOM.render(<App />, root)

console.log(1234)