import React, { Component } from 'react';
import logoMusica from './../../assets/img/musica-e1584123209397.jpg';

export default class Musica extends Component {
    render() {
        return (
            <div>
                  <h1 style={{background: 'beige', fontWeight:'bold', color: 'darkred'}}>Estoy en Musica</h1>
                <img style={{padding:'2em',background:'darkblue', width:'400px'}}src={logoMusica}/>  
            </div>
        )
    }
}
