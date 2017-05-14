import React from 'react'

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