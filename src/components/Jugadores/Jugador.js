import React, { Component } from "react";

class Jugador extends Component {
  seleccionarJugadorFav = () => {
    var jugador = this.props.Jugador;
    this.props.JugadorFavorito(jugador);
  };

  render() {
    return (
      <div style={{background: '#F6DDCC  '}}>
        <hr />
        <button style={{background:'#3498DB '}} onClick={this.seleccionarJugadorFav}>
          Marcar como jugador favorito
        </button>
        <button style={{background:'#E74C3C'}}>Eliminar jugador</button>
        <h3>Nombre: {this.props.Jugador.nombre}</h3>
        <h3>Numero: {this.props.Jugador.numero}</h3>
        <h3>Posición: {this.props.Jugador.posicion}</h3>
        <h3>Edad: {this.props.Jugador.edad}</h3>
        <img src={this.props.Jugador.imagen}></img>
        <hr />
      </div>
    );
  }
}

export default Jugador;
