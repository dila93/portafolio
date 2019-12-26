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



export default class Whoami extends Component {
    
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
            <div key={key} className="skill-container">
                <span className="skill-text">{data.language}</span>
                <span className="skill-value">{data.value + '%'}</span>
            </div>            
        )
    }

    render() {
        const {skills, title} = this.props;                                  
        return (
            <div id="whoami" className="full-section height-max-content">
                <div className="about-me height-x">                
                    <h1 className="title-h1"> {title} </h1>
                    <div className="whoami-content">
	                    <img src='img/yoalpha.png' className="img-redonda"/>
	                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>   
	                    <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>    
                    </div>        
                </div>                    
            </div>
        );
    }
}

Whoami.propTypes = {
    skills: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};
