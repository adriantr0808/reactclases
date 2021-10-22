import React, { Component } from 'react';
import logoTele from './../../assets/img/81xT9OUoGfL._AC_SX450_.jpg';

export default class Television extends Component {
    render() {
        return (
            <div>
                    <h1 style={{background: 'beige', fontWeight:'bold', color: 'darkred'}}>Estoy en Television</h1>
                <img style={{padding:'2em',background:'grey', width:'300px'}}src={logoTele}/>
            </div>
        )
    }
}
