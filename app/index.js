import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends Component {
    render(){
        return (
            <h1>Hello React!</h1>
        )
    }
}

ReactDOM.render (<App />, document.getElementById("app"));