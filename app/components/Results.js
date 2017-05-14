import React, {Component} from 'react'
import queryString from 'query-string'

class Results extends Component {
    render(){
        let players = queryString.parse(this.props.location.search)
        console.log(players);
        return(
            <div>Results</div>
        )
    }
}

export default Results