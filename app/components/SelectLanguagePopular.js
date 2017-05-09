import React, {Component} from 'react';
import PropTypes from 'prop-types';

function SelectLanguagePopular (props) {
    let languages = ['All','JavaScript','Ruby','Java','CSS','Python'];        
    return (
        <ul className="languages">
            {languages.map(lang =>
                
                <li style = {lang === props.selectedLanguage ? {color: '#d0021b'}: null }
                    onClick={props.onSelect.bind(null,lang)} 
                    key={lang}>
                    {lang}
                </li>)}  
        </ul>
    )    
}

SelectLanguagePopular.propTypes = {
  selectedLanguage: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default SelectLanguagePopular