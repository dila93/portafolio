import React, { Component } from "react";

let backgroundMe;


export default {
	spanish: {
		menu: [
			{
				title: 'Portafolio',
				url: '/'
			},
			{
				title: 'Habilidades',
				url: '#skills'
			},
			{
				title: '¿Pero, este quién es?',
				url: '#whoami'
			},
			{
				title: 'Blog',
				url: '/'
			},
		],
		who: 'Soy',
		whoami: [
            'Desarrollador FullStack',
            'Ingeniero de Sistemas',
            'Sebastian Ardila'
        ],
        welcome: "Bienvenido",
        skills_title: "Habilidades",
        whoami_title: "¿Pero, este quién es?"
	},
	english: {
		menu: [
			{
				title: 'Portfolio',
				url: '/'
			},
			{
				title: 'Skills',
				url: '#skills'
			},
			{
				title: '¿But, who is this guy?',
				url: '#whoami'
			},
			{
				title: 'Blog',
				url: '/'
			},
		],
		who: 'I\'m',
		whoami: [
            'FullStack developer',
            'Systems Engineer',
            'Sebastian Ardila'
        ],
        welcome: "Welcome",
        skills_title: "Skills",
        whoami_title: "¿But, who is this guy?",
	}
};