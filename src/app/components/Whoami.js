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
//whoami


export default class Whoami extends Component {
    
    componentDidMount() {
        // If you want to pass more options abackgroundMes props, simply add
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
        this.state = {
            backgroundMe: 'noBackground'
        };
    }

    selectColor(childrenIndex){
        let children = window.document.getElementsByTagName("text-color")[0].children;
        let index;  
        for(index=0; index < children.length; index++){
            if(index != childrenIndex){         
                children[index].style.border = "1px dashed gray";
            }else{
                if(childrenIndex == 2){
                    children[index].style.border = "3px dotted black";    
                }else{
                    children[index].style.border = "3px dotted white";    
                }                
            }
        }
   
        if(childrenIndex == 0){
            this.setState(state=>{
                state.backgroundMe = "redBackground"
                return state
            });
        }else if(childrenIndex == 1){
            this.setState(state=>{
                state.backgroundMe = 'blackBackground'
                return state
            });
        }else if(childrenIndex == 2){
            this.setState(state=>{
                state.backgroundMe = 'noBackground'
                return state
            });
        }        
    }


    aboutme(language){
        if(language=="spanish"){
            return(
                <div>
                    <text-color>
                        <div onClick={this.selectColor.bind(this, 0)} className="square red"></div>
                        <div onClick={this.selectColor.bind(this, 1)} className="square black"></div>
                        <div onClick={this.selectColor.bind(this, 2)} className="square transparent selection-black"></div>
                    </text-color>
                    <content className={this.state.backgroundMe}>
                        <span>Podría empezar hablando sobre <a className={this.state.linkColor} href="https://www.linkedin.com/in/sebastian-ardila/" target="_blank">mis habilidades o mi experiencia laboral</a>, pero prefiero que me conozcas primero como persona. Me gusta leer, "Así habló Zaratustra" es uno de mis libros favoritos, por eso trato de mantenerme siempre en el camino a la utopía del hombre que Nietzche retrataba en su libro. No soy religioso, pero creo en muchas de las enseñanzas humanas que están en los textos sagrados y filosóficos, por eso pienso que la humildad y la empatía son los valores más importantes. Por otro lado, me encanta la poesía y como la abstracción de las ideas y de la realidad se asemejan a la forma en que trabajo como desarrollador, pues hay que pensar siempre fuera de la caja y creo que dejando volar la imaginación usando analogías u observando distintos puntos de vista es cuando surgen las mejores ideas.</span><br/>
                        <span>El cerebro también merece ser entrenado y no solo para pensar sino también para resistir fisica y psicologicamente cualquier eventualidad, sé que esto último parece como prepararse para algo malo, pero la gente normalmente no entrena su cuerpo para sufrir sino para tener salud, con el cerebro es lo mismo. Entreno deportes y artes marciales cuando tengo tiempo, de allí rescato la enseñanza acerca de la disciplina y que al igual que los músculos, el cerebro se atrofia si no lo entrenas.
                            Por otro lado, amo a mi familia, pues estuvo en segundo plano durante mucho tiempo, luego conoces a personas sin buscarlas que te enseñan a valorar con el mismo amor que recibes y otorgas a otras, por eso a mis amigos y a esas personas les tengo mucho que agradecer.
                            Si quieres que hablemos escribeme, podemos ir a tomar un café, unas cervezas y hablar de negocios o de cualquier otro asunto.
                        </span>
                    </content>
                </div>
            );
        }else if(language=="english"){
            return(
                <div>
                    <text-color>
                        <div onClick={this.selectColor.bind(this, 0)} className="square red"></div>
                        <div onClick={this.selectColor.bind(this, 1)} className="square black"></div>
                        <div onClick={this.selectColor.bind(this, 2)} className="square transparent selection-black"></div>
                    </text-color>
                    <content className={this.state.backgroundMe}>
                        <span>I could start talking about <a href="https://www.linkedin.com/in/sebastian-ardila/" target="_blank">my skills or my laboral expierence</a>, but i prefer you to know me first like a person. I like to read, "Zaratustra" is one of my favorites books, for that reason i try to be always in the way to the utopy of the man that</span><br/>
                        <span>El ejercicio es una buena practica, pero el cerebro también merece ser entrenado y no solo para pensar sino también para resistir fisica y psicologicamente cualquier eventualidad, sé que esto último parece como prepararse para algo malo, pero la gente normalmente no entrena su cuerpo para sufrir sino para tener salud, con el cerebro es lo mismo. Entreno deportes y artes marciales cuando tengo tiempo, de allí rescato la enseñanza acerca de la disciplina y que al igual que los músculos, el cerebro se atrofia si no lo entrenas.
                            Por otro lado, amo a mi familia, pues estuvo en segundo plano durante mucho tiempo, luego conoces a personas sin buscarlas que te enseñan a valorar con el mismo amor que recibes y otorgas a otras, por eso a mis amigos y a esas personas les tengo mucho que agradecer.
                            Si quieres que hablemos escribeme, podemos ir a tomar un café, unas cervezas y hablar de negocios o de cualquier otro asunto.
                        </span>
                    </content>
                </div>
            );
        }
    }

    render() {
        const {language, title} = this.props;                            
        return (
            <div id="whoami" className="full-section height-max-content">
                <div className="about-me height-x">                
                    <h1 className="title-h1"> {title} </h1>
                    <div className="whoami-content">
	                    <img src='img/yoalpha.png' className="img-redonda"/>
	                    {this.aboutme(language)}
                    </div>
                </div>
            </div>
        );
    }
}

Whoami.propTypes = {
    language: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};
