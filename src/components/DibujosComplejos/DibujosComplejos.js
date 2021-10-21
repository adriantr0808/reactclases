import React, { Component } from "react";

class DibujosComplejos extends Component {
  dibujarNumeros = () => {
    //Si tenemos un buvcle, vamos a visualizar
    //El dibuo que nos ofrece como resultado
    //la forma de realizrlo es almacenar dentro
    //una lista se declara como un array lista=[];
    //Tiene un metodo push() que nos permite ir añadiedo
    //elementos a lista de forma dinamica

    var lista = [];
    for (var i = 1; i <= 5; i++) {
      lista.push(<li>Número: {i}</li>);
    }
    return lista;
  };

  //Vamos a declarar un array en state
  //Y lo recorremos dentro de render()

  state = {
    nombres: ["Marcos", "Antonio", "Lucia", "Adrian", "Gema"],
  };

  insertarNombre = () => {
    //Necesitamos cambiar el state
    //Si deseamos añadir un valor con acceder
    //A State y utlilizar push para visualizar los cambios
    this.state.nombres.push("Adela");
    //Debemos igualar el state para visualizar los cambios

    this.setState({
      nombres: this.state.nombres,
    });
  };

  render() {
    return (
      <div>
        <h1>Dibujos con bucles</h1>
        <button onClick={() => this.insertarNombre()}>Añadir un nombre</button>
        {this.state.nombres.map((name, index) => {
          //A diferencia de el codigo en metodo
          //Aqui pondremos el return directo del codigo
          //Que deseemos
          return (<h2 key={index}>{name}</h2>);
        })}
      </div>
    );
  }
}

export default DibujosComplejos;
