import axios from 'axios'
import {ID, SECRET} from './config'

let params = `?client_id=${ID}&client_secret=${SECRET}`




export default {
    battle: function(players) {

    },

    fetchPopularRepos: function(language) {
        var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

        return axios.get(encodedURI)
            .then(response => response.data.items)
    }
}