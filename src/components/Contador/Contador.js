//Debemos importar siempre {Component}
//Con JSX
import { Component } from "react";
import React, { useState } from "react";

//Tambien poemos utlizar functions con sintazis
//de Javascript para separar codigo
//Logicamente, en esta funcion no pdemos utilizar

function miFunction() {
  console.log("Soy una función fuera de la clase");
}

class Contador extends Component {
  //Para declarar variables o metodos
  //no se utiliza s var, const ni nada

  contador = 1;
  //Metodo a nivel de clase this
  incrementarContador = () => {
    console.log("Contador: " + this.contador);
    this.contador++;
  };

  //Podemos untilizar variables de estado
  //y modificamos cuando deseemos (dibujo)
  //Si deseamos crear una variable de estado desde
  //el inicio (no en un boton) se utiliza state
  //de la clase
  //con state de la clase, primero declaramos las variables de estado y luego podremos
  //modificarlas con metodo setState
  // state = {variable1: valor1, variable2: valor2 };
  //Podemos utlizar props
  //state = { valor: 1 };
  state = { valor: parseInt(this.props.Inicio) };
  //Creamos un metodo para cambiar el valor

  incrementarValor = () => {
    //Aqui lo unico que debemos hacer es cambiar el
    //estado y la variable valor
    this.setState({ valor: this.state.valor + 1 });
  };

  render() {
    //Este codigo se actualiza al inicio y al
    //cambiar cualquier state. Es igual a utlizar function
    var valor = 14;
    const miMetodoRnder = () => {
      valor += 1;
      console.log("Soy un metodo dentro de Reder " + valor);
    };
    return (
      <div
        style={{
          background: "beige",
          border: "1px solid black",
          margin: "1em",
        }}
      >
        <h1>Primer component JSX</h1>
        <h2 style={{ color: "red" }}>Inicio: {this.props.Inicio} </h2>
        <h2 style={{ color: "lightgreen" }}>{this.state.valor}</h2>

        <button
          onClick={() => {
            miMetodoRnder();
            miFunction();
            //Los metodos y elementos de clase siempre deben llevar this
            this.incrementarContador();
          }}
        >
          Pulsa y haz algo
        </button>
        {/* Si estamos utilizando METODOS de CLASE PODEMOS LLAMARLO CON OTRA SINTAXIS MAS FACIL */}
        <button style={{ margin: "1em" }} onClick={this.incrementarValor}>
          Pulsa para incrementar valor
        </button>
      </div>
    );
  }
}

export default Contador;
