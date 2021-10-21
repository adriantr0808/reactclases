import Deporte from "./Deporte";
import React, { Component } from 'react';


class Deportes extends Component{
        //Aqui haremos una lista con todos los deportes
        //Deportes y sera estatico

      

        //Debemos crear un deporte favorito en state para poder cambiarlo al seleccionar
        //Si tenemos los deportes fuera de state seran estaticos, sin embargo si los ponemos dentro de state es dinamico
        state = {
            seleccionado:'',
            deportes : ['Padel','Petanca','Curling','Futbol','Tenis','Canicas']
        };


        //Tenemos el metodo del parent
        mostrarFavorito = (deporteFavorito) => {
            //Tengo que recibir algo del hijo (favorito)
          this.setState({
            seleccionado: deporteFavorito
          });
        };

        insertarDeporte = () => {
            this.state.deportes.push('Baloncesto');
            this.setState({
                deportes: this.state.deportes
            });
        };

        render(){
        return (<div>
            <ul>
         {this.state.deportes.map((depor,index)=> {
             return (<Deporte Nombre={depor} key={index} MostrarFavorito={this.mostrarFavorito}/>);
         })}
         </ul>
         <h2>Tu deporte favorito es el/la <span style={{color: 'darkred'}}>{this.state.seleccionado}</span></h2>
         <button onClick={this.insertarDeporte}>
             Nuevo deporte
         </button>
        </div>
        );
    }
}


export default Deportes;