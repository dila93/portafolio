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
                        <span>I could start talking about <a href="https://www.linkedin.com/in/sebastian-ardila/" target="_blank">my skills or my laboral expierence</a>, but i prefer you to know me first like a person. I like to read, "This is how Zarathustra spoke" in one of my favorite books. That’s why I try always to stay on the road to the utopia of the man Nietzche portrayed in his book. I am not religious but I believe in many of the human teachings that are in the sacred and philosophical texts, so I think that humility and empathy are the most important values. On the other hand, I love poetry and how the abstraction of ideas and the reality are similar to the way I work as a developer because you always have to think outside the box and I think letting the imagination fly using analogies or observing different points of view is when the best ideas came up. 
                            The brain also deserves to be trained and not only to think but also to physically and psychologically resist any eventuality, I know that the last part seems like preparing for something bad, but people do not normally train their body to suffer but to have health, with the brain is the same. I train sports and martial arts when I have free time, from there I rescue the teaching about discipline and the same time like muscles, the brain atrophies if you don't train it. On the other hand, I love my family, because it was in the background for a long time, then you meet people without looking for them who teach you to value with the same love you receive and give to others, that's why my friends and those people have them to be thankful for. If you want us to talk, write to me, we can go for coffee, some beers and talk about business or any other matter.
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
