import React, {Component} from 'react';
import SelectLanguagePopular from './SelectLanguagePopular'
import RepoGridPopular from './RepoGridPopular'
import api from '../utils/api';

class Popular extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedLanguage: 'All',
            repos:null
        }
        this.updateLanguage = this.updateLanguage.bind(this)
    }
    componentDidMount(){
        this.updateLanguage(this.state.selectedLanguage)
    }
    updateLanguage(lang){
        this.setState({selectedLanguage: lang,
                        repos:null})
        
        api.fetchPopularRepos(lang)
            .then(response => this.setState({repos:response}))
    }
    render() {
        
        return (
            <div>
                <SelectLanguagePopular
                    selectedLanguage = {this.state.selectedLanguage}
                    onSelect = {this.updateLanguage} 
                />
                <RepoGridPopular 
                    repos={this.state.repos}
                />
            </div>
        )        
    }
}


export default Popular