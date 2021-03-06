import axios from 'axios'
import {ID, SECRET} from './config'

let params = `?client_id=${ID}&client_secret=${SECRET}`
let url = `https://api.github.com/users/`

function getProfile(username) {
    return axios.get(`${url}${username}${params}`)
        .then(user => {
            return user.data
        })
}

function getRepos(username) {
    return axios.get(`${url}${username}/repos${params}&per_page=100`)
}

function getStarCount(repos) {
    return repos.data.reduce((count,repo) => {
        return count + repo.stargazers_count
    },0)
}

function calculateScore(profile,repos) {
    let followers = profile.followers
    let totalStars = getStarCount(repos)

    return (followers*3) + totalStars
}

function handleError(error) {
    console.warn(error)
    return null
}

function getUserData(player){
    return axios.all([
        getProfile(player),
        getRepos(player)
    ]).then(data => {
        let profile = data[0]
        let repos = data[1]

        let score = calculateScore(profile, repos)

        return {profile, score}
    })
}

function sortPlayers(players) {
    return players.sort((a,b) => b.score - a.score)
}

export default {
    battle: function(players) {
        return axios.all(players.map(getUserData))
            .then(sortPlayers)
            .catch(handleError)
    },

    fetchPopularRepos: function(language) {
        var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

        return axios.get(encodedURI)
            .then(response => response.data.items)
    }
}