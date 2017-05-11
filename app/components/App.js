import React, {Component} from 'react'
import {BrowserRouter as Router, Route}  from 'react-router-dom'
import Popular from './Popular'
import Nav from './Nav'
import Home from './Home'
import Battle from './Battle'


class App extends Component {
    render(){
        return (
            <Router>
                <div className="container">
                    <Nav />
                    <Route exact path='/' component={Home} />
                    <Route path='/popular' component={Popular} />
                    <Route path='/battle' component={Battle} />
                </div>
            </Router>
        )
    }
}

export default App