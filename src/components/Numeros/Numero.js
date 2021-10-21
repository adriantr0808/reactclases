import React, { Component } from 'react'

class Numero extends Component {

    //Este metodo se ejecutara cuando pulsemos un boton, cogera el numero que corresponda con el boton
   numeroElegido = () =>{
       
    var numero = this.props.Num; //Nos guardamos en la variable numero la propiedad Num 
    this.props.SumarNumeros(numero); //LLamamos a la propiedad SumarNumeros que la pasamos desde el padre y le pasamos el 
                                    //el numero que queremos sumar
   }

    render(){
        return(<React.Fragment>
            <div style={{background:'beige', margin: '2em', padding: '1em', border: '2px solid black'}}>
          <h2>Numero:<span style={{color: 'darkblue'}}> {this.props.Num}</span></h2>
          <button onClick={(() => this.numeroElegido())}>Sumar</button>
          </div>
        </React.Fragment>
            );
    };

}

export default Numero;