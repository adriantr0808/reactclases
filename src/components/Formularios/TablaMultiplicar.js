import React, { Component } from 'react'

export default class TablaMultiplicar extends Component {
    
    cajaNumero = React.createRef();

    
    state = {
       tabla:[]
    }

    recibirNumero = (e) =>{
        e.preventDefault();
        var array=[];
        var num = this.cajaNumero.current.value;

        for(var i=1; i<10; i++){
            var resul = num*i;
            array.push(resul);
        }

        this.setState({
            tabla: array
        });
        
    }
    
    
    render() {
        return (
            <div style={{margin: '1em'}}>
                <h1>Tabla de mutliplicar</h1>
                <form onSubmit={this.recibirNumero}>
                    
                    <label >Introduce un numero: </label>
                    <input style={{margin:'1em'}} ref={this.cajaNumero} type="number"/>
                    <button >Tabla de multiplicar</button>
                    <div>
                      <table style={{margin:'auto'}} border='1'>
                          <th>Multiplicacion</th>
                          <th>Resultado</th>
                            {this.state.tabla.map((resul, index)=>{
                                return(<tr><td key={index}>{this.cajaNumero.current.value} x {index+1} </td> <td> {resul} </td></tr>);
                            })}
                    </table>
                    </div>
                </form>
                
            </div>
        )
    }
}
