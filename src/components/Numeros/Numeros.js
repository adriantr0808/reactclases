import Numero from "./Numero";
import React, { Component } from 'react';


class Numeros extends Component{
      
    //Nos creamos las variables de estado resultado para la suma
    //y el array de numeros, para luego añadir mas numeros si queremos
    state = {
        resultado: 0,
        numeros: ['4','2','56','12']

    };

    //Metodo apra sumar numeros, recibe un parametro numero que sera el numero que corresponda 
    //con el boton en le que clickemos, esa parte esta en el hijo
    sumarNumeros = (numero) =>{
        //Vamos a modificar dinamicamente resultado, para sumar
        this.setState({ 
            resultado: this.state.resultado + parseInt(numero)
        });
        //console.log(this.state.resultado);
    };

    //Metodo para insertar un numero, hacemos push al array de un numero aleatorio
    insertarNumero = () =>{
        this.state.numeros.push(Math.floor(Math.random()*(100-1)+1));
        //Y modificamos el array mediante state
        this.setState({
            numeros: this.state.numeros
        });

    }
        

        render(){
        return (<div >
            <div style={{background:'darkred', padding:'3em', margin: '2em', border: '2px solid black', color: 'white'}}>
          <h1>Suma: {this.state.resultado}</h1>
          <button onClick={this.insertarNumero}>Insertar Numero</button>
          </div>
         {this.state.numeros.map((num,index)=> {
             return (<Numero Num={num} key={index} SumarNumeros={this.sumarNumeros}/>);
         })}
       
       
        </div>
        );
    }
}


export default Numeros;