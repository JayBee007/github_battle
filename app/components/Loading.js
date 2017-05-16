import React, {Component} from 'react'
import PropTypes from 'prop-types'

var styles = {
    content : {
        'textAlign' : 'center',
        'fontSize' : '28px'
    }
}

class Loading extends Component {
    constructor(props){
        super(props)

        this.state = {
            text : props.text
        }
    }

    componentDidMount() {
        var stopper = this.props.text + '...'
    
    }

    render(){
        return(
            <p style = {styles.content}>
                {this.state.text}
            </p>
        )
    }
}

Loading.propTypes = {
    text : PropTypes.string.isRequired
}

Loading.defaultProps = {
    text : 'Loading'
}

export default Loading