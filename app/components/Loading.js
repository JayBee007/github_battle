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
        let stopper = this.props.text + '...'

        this.interval = setInterval(() => {
            if(this.state.text === stopper) {
                this.setState({text : this.props.text})
            }else {
                this.setState((prevState) => {
                    return {text : prevState.text + '.'}
                })
            }
        },500)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
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