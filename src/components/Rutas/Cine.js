import React, { Component } from 'react'
import logoCine from './../../assets/img/1823382-750x447-1.jpg';

export default class Cine extends Component {
    render() {
        return (
            <div>
                 <h1 style={{background: 'beige', fontWeight:'bold', color: 'darkred'}}>Estoy en Cine</h1>
                <img style={{padding:'2em',background:'darkgreen',width:'300px'}}src={logoCine}/>
            </div>
        )
    }
}
