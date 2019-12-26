// Dependencies
import React from 'react';
import {render} from 'react-dom';
// Components
import Main from './components/Main.js';
import Skills from './components/Skills.js';
import Whoami from './components/Whoami.js';
import Jobs from './components/Jobs.js';
// import Session from './configuration/session.js';

// Data
import data from './data/data';

import {
    BrowserRouter as Router,
    browserHistory,
    Route,
} from 'react-router-dom';

// Main variables
var strings, menu, welcome, who;
// Skills variables
var skills_title;
var skills;
// Whoami variables
var whoami_title;
// Global variables
var language;
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'En'
        };
        this.styles = {borderColor: '#551A8B', border: 'solid'};

        this.language_english = this.language_english.bind(this);
        this.language_spanish = this.language_spanish.bind(this);        
    }

    componentWillMount(){
        this.language_cache();
    }

    language_cache(){
        if(localStorage.getItem('language') == 'En'){
            this.setState({language: 'En'});            
        }else if (localStorage.getItem('language') == 'Es'){
            this.setState({language: 'Es'});            
        }
    }

    language_english(){
        this.setState({
            language: 'En',
            en_checked: true,
            es_checked: false,
        });        
        localStorage.setItem('language', 'En');
    }

    language_spanish(){
        this.setState({
            language: 'Es',
            en_checked: false,
            es_checked: true,});        
        localStorage.setItem('language', 'Es');
    }

    language_is(){
        if(this.state.language == "Es"){
            //MAIN
            strings = data.spanish.whoami;
            menu = data.spanish.menu;
            welcome = data.spanish.welcome;
            who = data.spanish.who;
            //SKILLS
            skills_title = data.spanish.skills_title;
            //WHOAMI
            whoami_title = data.spanish.whoami_title;

        }else if(this.state.language == "En"){
            //MAIN
            strings = data.english.whoami;
            menu = data.english.menu;
            welcome = data.english.welcome;
            who = data.english.who;
            //SKILLS
            skills_title = data.english.skills_title;
            //WHOAMI
            whoami_title = data.english.whoami_title;
            
        }
    }

    get_skills(){
        skills = [{
            language: "CSS",
            value: "90",
            color: "#088A29"
        },
        {
            language: "Html",
            value: "100",
            color: "#04B431"
        },
        {
            language: "Javascript",
            value: "90",
            color: "#01DF3A"
        },
        {
            language: "Node js",
            value: "80",
            color: "#00FF40"
        },
        {
            language: "Express js",
            value: "85",
            color: "#2EFE64"
        },
        {
            language: "React js",
            value: "50",
            color: "#81F79F"
        },
        {
            language: "Mongodb",
            value: "60",
            color: "#58FA82"
        },
        {
            language: "Jest js",
            value: "50",
            color: "#81F79F"
        },
        {
            language: "Mysql",
            value: "50",
            color: "#81F79F"
        }            
        ];

        return skills
    }

    render() {
        this.language_is()
        this.get_skills()
        
        return (
            <div id="intro">
                <div className="base">
                    <div className="languages">
                        <input type="radio" style={this.styles} name="editList" id="english_radio" value="always" onClick={this.language_english}/>
                        <label htmlFor="english_radio" className="flag english_flag"></label>

                        <input type="radio" name="editList" id="spanish_radio" value="never" onClick={this.language_spanish}/>
                        <label htmlFor="spanish_radio" className="flag spanish_flag"></label>
                    </div>                    
                    <Main 
                        strings={strings}
                        menu={menu}
                        welcome={welcome}
                        who={who}
                    />
                    <Skills
                        skills={skills}
                        title={skills_title}
                    />
                    <Whoami
                        skills={skills}
                        title={whoami_title}
                    />
                    {/*<Jobs

                    />*/}
                </div>                
            </div>

        );
    }
}

var domContainer = document.getElementById('app');
render(<App/>,domContainer);