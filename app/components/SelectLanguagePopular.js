import React, {Component} from 'react';
import PropTypes from 'prop-types';

class SelectLanguagePopular extends Component {
    render(){
        let languages = ['All','JavaScript','Ruby','Java','CSS','Python'];
        return (
            <ul className="languages">
                {languages.map(lang =>
                    
                    <li style = {lang === this.props.selectedLanguage ? {color: '#d0021b'}: null }
                        onClick={this.props.onSelect.bind(null,lang)} 
                        key={lang}>
                        {lang}
                    </li>)}  
            </ul>
        )
    }
}

SelectLanguagePopular.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default SelectLanguagePopular