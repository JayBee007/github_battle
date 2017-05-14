import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

function PlayerPreview (props) {
    return (
        <div>
            <div className = 'column'>
                <img
                    className = 'avatar'
                    src = {props.avatar}
                    alt = {`Avatar for ${props.username}`} />
                <h2 className = 'username'>@{props.username}</h2>
            </div>
            <button className = 'button' onClick = {props.onReset.bind(null, props.id)}>
                Reset
            </button>
        </div>
    )
}

PlayerPreview.propTypes = {
    avatar : PropTypes.string.isRequired,
    username : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired,
    onReset : PropTypes.func.isRequired
}

// Player Input
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
                <button
                    className = 'button'
                    type = 'submit'
                    disabled = {!this.state.username}>                    
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







// Battle Component 

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
        this.handleReset = this.handleReset.bind(this)
    }
    handleSubmit(id, username){
        let newState = {};
        newState[id + 'Name'] = username;
        newState[id + 'Image'] = 'https://github.com/' + username + '.png?size=200';

        this.setState(newState);
    }
    handleReset(id) {
        let newState = {};
        newState[id + 'Name'] = "";
        newState[id + 'Image'] = null

        this.setState(newState);
    }
    render(){
        let {match} = this.props
        let {playerOneName,
            playerTwoName,
            playerOneImage,
            playerTwoImage} = this.state
        return(
            <div>
                <div className="row">
                    {!playerOneName &&
                    <PlayerInput
                    id= 'playerOne'
                    label = 'Player One'
                    onSubimt = {this.handleSubmit} />}
                
                {playerOneImage !==null && 
                    <PlayerPreview 
                        avatar = {playerOneImage}
                        username = {playerOneName}
                        onReset = {this.handleReset}
                        id = 'playerOne'
                    />}

                    {!playerTwoName &&
                    <PlayerInput
                    id= 'playerTwo'
                    label = 'Player Two'
                    onSubimt = {this.handleSubmit} />}

                    {playerTwoImage !==null && 
                    <PlayerPreview 
                        avatar = {playerTwoImage}
                        username = {playerTwoName}
                        onReset = {this.handleReset}
                        id = 'playerTwo'
                    />}
                </div>
                {playerOneImage && playerTwoImage &&
                    <Link className = 'button' to = {{
                        pathname : `${match.url}/results`,
                        search : `?playerOneName=${playerOneName}&playerTwoName=${playerTwoName}`
                    }}>
                        Battle
                    </Link>
                }
            </div>
        )
    }
}


export default Battle