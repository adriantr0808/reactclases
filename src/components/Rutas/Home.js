import React, { Component } from 'react';
import logoHome from './../../assets/img/types-of-homes-hero.jpg'

export default class Home extends Component {
    render() {
        return (
            <div>
                <h1 style={{background: 'beige', fontWeight:'bold', color: 'darkred'}}>Estoy en Casa</h1>
                <img style={{width:'400px', height:'200px'}}src={logoHome}/>
            </div>
        )
    }
}
