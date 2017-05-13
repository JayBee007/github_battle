import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch}  from 'react-router-dom'

import Popular from './Popular'
import Nav from './Nav'
import Home from './Home'
import Battle from './Battle'
import NotFound from './NotFound'


class App extends Component {
    render(){
        return (
            <Router>
                <div className="container">
                    <Nav />
                    <Switch>
                        <Route exact path ='/' component = {Home} />
                        <Route exact path ='/popular' component = {Popular} />
                        <Route path ='/battle' component = {Battle} />
                        <Route render = {NotFound} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App