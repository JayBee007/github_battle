import React, {Component} from 'react'
import PropTypes from 'prop-types'


class PlayerInput extends Component {
    constructor(props){
        super(props)
        this.state = {
            username:''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(e){
        let value = e.target.value;

        this.setState({
            username: value
        })  
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.onSubimt(
            this.props.id,
            this.state.username
        )
    }
    render(){
        return(
            <form onSubmit = {this.handleSubmit} className = "column">
                <label className = 'header' htmlFor = 'username'>
                    {this.props.label}
                </label>
                <input 
                    id ='username'
                    placeholder = 'Please enter GitHub Username'
                    type = 'text'
                    autoComplete = 'off'
                    value = {this.state.username}
                    onChange = {this.handleChange}
                />
                <button>
                    className = 'button'
                    type = 'submit'
                    disabled = {!this.state.username}
                        Submit
                </button>
            </form>
        )
    }
}

PlayerInput.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onSubimt: PropTypes.func.isRequired
}









class Battle extends Component {
    constructor(props){
        super(props)
        this.state = {
            playerOneName:'',
            playerTwoName:'',
            playerOneImage:null,
            playerTwoImage:null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(id, username){
        let newState = {};
        newState[id + 'Name'] = username;
        newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';

        this.setState(newState);
    }
    render(){
        let {playerOneName, playerTwoName} = this.state;
        return(
            <div className="row">
                {!playerOneName &&
                <PlayerInput
                id= 'playerOne'
                label = 'Player One'
                onSubimt = {this.handleSubmit} />}

                {!playerTwoName &&
                <PlayerInput
                id= 'playerOne'
                label = 'Player Two'
                onSubimt = {this.handleSubmit} />}
            </div>
        )
    }
}


export default Battle