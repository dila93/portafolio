//Dependencies
import React, { Component } from "react";
import {Row} from "react-materialize";
import {Redirect} from 'react-router-dom';
import Typed from 'react-typed';
import PropTypes from 'prop-types';
import {CopyToClipboard} from 'react-copy-to-clipboard';

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
        this.facebook = "https://www.facebook.com/dila.sebas";
        this.github = "https://github.com/dila93";
        this.linkedin = "https://www.linkedin.com/in/sebastian-ardila/";
        this.whatsapp = "+57 3177822100";
        this.youtube = "https://www.youtube.com/channel/UCoA4ha4ToLG8Ro9M7hQ20IQ";
    }

    render() {
        const {strings, menu, welcome, who} = this.props;        
        return (

            <div className="header">                

                <div className="menu-dev">

                    <input type="checkbox" id="btn-menu-check"></input>
                    <label htmlFor="btn-menu-check" className="fas fa-bars fa-2x order-btn-menu"></label>
                    <p className="order-txt-menu">Menu</p>

                    <div className="menu-pc">                        
                        <div className="menu-cell">
                            {menu && menu.map((item, key) => <a href={item.url} className="item-menu" key={key}><p className="item-menu-name">{item.title}</p></a>)}
                        </div>

                    </div>
                    
                </div>
        
                
                <div className="inner "> 
                    
                    <div className="content">
                        
                        <p className="whoami">{who} <Typed
                            strings={strings}
                            typeSpeed={20}
                            backSpeed={50} 
                            backDelay={1000}
                            loop 
                        /></p>

                    </div>

                    <div className="social">
                        <a id="select-fb" target="_blank" href={this.facebook}><i className="fab fa-facebook-f logo fb" ></i></a>&nbsp;
                        <a id="select-gh" target="_blank" href={this.github}><i className="fab fa-github logo gh" ></i></a>&nbsp;
                        <a id="select-lk" target="_blank" href={this.linkedin}><i className="fab fa-linkedin-in logo lk"></i></a>&nbsp;                    
                        
                        <CopyToClipboard text={"+57 3177822100"} id="select-wp">
                            <span>
                                <a>
                                    <i className="fab fa-whatsapp logo wp" ></i>
                                </a>
                            </span>
                        </CopyToClipboard>&nbsp;
                                            
                        <a id="select-yt" target="_blank" href={this.youtube}><i className="fab fa-youtube logo yt"></i></a>&nbsp;
                        <br></br>
                        <p className="unselected-welcome">{welcome}</p>
                        <p className="selected-wp">+57 3177822100</p>
                    </div>
                    <br></br>
                </div>
            </div>

        );
    }
}

Main.propTypes = {
    strings: PropTypes.array.isRequired,
    menu: PropTypes.array.isRequired,
    welcome: PropTypes.string.isRequired,
    who: PropTypes.string.isRequired
};
