//Dependencies
import React, { Component } from "react";
import {Row, Col} from "react-materialize";
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
                <Row>
                    <Col xs={6} s={6} m={6} l={6}>
                        <h1>Current personal projects</h1>
                        <p>Excel</p>
                    </Col>
                    <Col xs={6} s={6} m={6} l={6}>
                        <h1>Expirience</h1>
                    </Col>
                </Row>
            </div>
        );
    }
}

Main.propTypes = {
};
