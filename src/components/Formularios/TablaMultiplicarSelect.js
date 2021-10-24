import React, { Component } from 'react'

export default class TablaMultiplicarSelect extends Component {
    
    optionSelect = React.createRef();


    state = {
        tabla: []
    }

    //TENDREMOS UN METODO PARA EL FORMULARIO
    recogerDatos = (e) =>{
        e.preventDefault();
        var numero = parseInt(this.optionSelect.current.value);
        var datos=[];
        for(var i = 0; i <=9; i++){
            var multi = numero * i;
            datos.push(<tr key={i}>
                <td>{numero+' x '+i}</td>
                <td>{multi}</td>
                </tr>)
        }
        this.setState({
            tabla: datos
        })
    }; 

    //METODO PARA CARGAR LOS OPTION AL INICIO
    generarOptions = () =>{
        var options = [];
        for (var i =1; i<=5; i++){
            var aleatorio = Math.round((Math.random()*50)+1);
            options.push(<option key={i} value={aleatorio}>{aleatorio}</option>)
        }
        return options;
    };
    
    
    render() {
        return (
            <div>
                <h1>Tabla de multiplicar con select</h1>
                <form style={{margin:'4em'}} onSubmit={this.recogerDatos}>
                <label>Seleccione un número:</label>
                <select ref={this.optionSelect}>{this.generarOptions()}</select>
                <button>Mostrar tabla</button>
                </form>
                <table style={{margin:'auto'}} border='2'>
                <thead>
                    <tr>
                    <th>Operación</th>
                    <th>Resultado</th>
                    </tr>
                </thead>
                <tbody>
                   {this.state.tabla} 
                </tbody>
                </table>
            </div>
        )
    }
}
