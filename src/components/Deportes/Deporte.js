import React, { Component } from 'react'

class Deporte extends Component {


    //Necesitamos metodo para poder llamar al metodo padre

    seleccionarFavorito = () => {
        //Aqui llamamos de forma explicita al metodo props del padre
        //Necesitamos el deporte seleccionado
        //Donde esta??
        var depor = this.props.Nombre;
        this.props.MostrarFavorito(depor);
    };

    render(){
        return(<React.Fragment>
            <li style={{color: 'darkblue', listStyleType: 'none', fontWeight: 'bold'}}>
                {this.props.Nombre}
            
                <button onClick={() => this.seleccionarFavorito()}style={{margin:'1em'}}>Seleccionar como favorito</button>
            </li>

        </React.Fragment>
     
            
            );
    };

}

export default Deporte;