import React, { Component } from 'react'


class Comic extends Component {


    render(){
        return(
        <div>
             <button onClick={() => {
                var seleccionado = this.props.Comic;
                this.props.seleccionarFavorito(seleccionado)
            }} >Seleccionar favorito</button>
            <button onClick={()=>{
                var index = this.props.index;
                this.props.eliminarComic(index);
            }} style={{background:'red', color:'white'}}>Eliminar comic</button>
            <button>Modificar Comic</button>
            <h1 style={{color:'darkred'}}>{this.props.Comic.titulo}</h1>
            <h4 style={{color:'darkred'}}>{this.props.Comic.descripcion}</h4>
           
            <img src={this.props.Comic.imagen}/>
           
        </div>);
    }
}

export default Comic;