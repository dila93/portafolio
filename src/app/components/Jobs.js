//Dependencies
import React, { Component } from "react";
import {Row} from "react-materialize";
import {Redirect} from 'react-router-dom';
import Typed from 'react-typed';
import PropTypes from 'prop-types';

//Styles
import './global/css/bgd.css';
// Components

// Constants

var ginfo = "";

export default class Main extends Component {
    
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

    render() {
        const {skills, title} = this.props;                                  
        return (
            <div id="jobs">
                <h1>Jobs</h1>
                <p>hola</p>    
            </div>
        );
    }
}

Main.propTypes = {
};
