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

    progress_bar(data){
        console.log("data: ", data);  
        return (                  
                <Col s={1} m={1} l={2} xl={3}>
                    <div>
                        <a>{data.language}</a>
                    </div>
                </Col>                
        )
    }

    render() {
        const {skills, title} = this.props;                                  
        return (
            <div id="skills">
                <div className="habilities">                
                    <h1> {title} </h1>
                    <Row style={{textAlign: 'center'}}>
                    {skills && skills.map((item, key) => this.progress_bar(item))}
                    </Row>                   
                </div>                    
            </div>
        );
    }
}

Main.propTypes = {
    skills: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
};
