import React,{Component} from 'react';
import PropTypes from 'prop-types';

function RepoGridPopular(props){
    return(
        <ul className="popular-list">
            {props.repos.map((repo,index) => 
            <li className="popular-item" key={repo.name}>
                <div className="popular-rank">#{index + 1}</div>
                <ul className="space-list-items">
                    <li>
                        <img className="avatar"
                        src={repo.owner.avatar_url}
                        alt={'Avatar for ' + repo.name}
                        />                        
                    </li>
                    <li>
                        <a href={repo.html_url} target="_blank">{repo.name}</a>
                    </li>
                    <li>
                        @{repo.owner.login}
                    </li>
                    <li>
                        {repo.stargazers_count} stars
                    </li>
                </ul>
            </li>)}
        </ul>
    )
}

RepoGridPopular.propTypes = {
    repos: PropTypes.array.isRequired
}

export default RepoGridPopular