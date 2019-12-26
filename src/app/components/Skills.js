//Dependencies
import React, { Component } from "react";
import {Row, Col, Chip, Tag} from "react-materialize";
import {Redirect} from 'react-router-dom';
import Typed from 'react-typed';
import PropTypes from 'prop-types';
import { Line, Circle } from 'rc-progress';

//Styles
import './global/css/bgd.css';
// Components

// Constants

var ginfo = "";

export default class Skills extends Component {
    
    componentDidMount() {
        // If you want to pass more options as props, simply add
        // your desired props to this destructuring assignment.
        const { stringsTyped } = this.props;
    }

    componentWillUnmount() {
        // Make sure to destroy Typed instance on unmounting
        // to prevent memory leaks
        this.typed.destroy();
    }
    constructor() {
        super();
        this.state = {};
    }

    progress_bar(data, key){
        return (
            <div  key={key} className="skill-container">
                <span className="skill-text">{data.language}</span>
                <span className="skill-value">{data.value + '%'}</span>
            </div>            
        )
    }

    render() {
        const {skills, title} = this.props;                                  
        return (
            <div id="skills" className="full-section height-x">
                <div className="habilities">                
                    <h1 className="title-h1"> {title} </h1>
                    <div className="skills-group">
                        {skills && skills.map((item, key) => this.progress_bar(item, key))}
                    </div>                   
                </div>                    
            </div>
        );
    }
}

Skills.propTypes = {
    skills: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};
