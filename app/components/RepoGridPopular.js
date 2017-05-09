import React,{Component} from 'react';

function RepoGridPopular(props){
    if(!props.repos){
        return(
            <h1>Loading....</h1>
        )
    }
    return(
        <ul>
            {props.repos.map(repo => <li key={repo.name}>{repo.name}</li>)}
        </ul>
    )
}

export default RepoGridPopular