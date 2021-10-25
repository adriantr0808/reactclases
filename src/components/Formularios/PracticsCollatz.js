import React, { Component } from 'react'

export default class PracticsCollatz extends Component {

    numero = React.createRef();


    state = {
        numeros:[]
    }

    Collatz = (e) => {
        e.preventDefault();
        var num = this.numero.current.value;
        var array=[];
        while(num> 1) {

            if(num % 2 === 0){
                num = num / 2;
            }else{
                num =num * 3 + 1;
            }
           
            array.push(num);
            
        }
        console.log(array);
        this.setState({
            numeros: array
         });  
        console.log(this.state.numeros);
    }



    render() {
        return (
            <div>
                <form onSubmit={this.Collatz}>
                <h1>Practica conjetura de Collatz</h1>
                <label>Introduce un numero:</label>
                <input type="text" ref={this.numero}/>
                <button>Pulsa para ejecutar conjetura de Collatz</button>
                <table border='1' style={{margin:'auto'}}>
                    <thead>Numeros</thead>
                    <tbody> 
                    {this.state.numeros.map((num, index) => {
                        return(<tr key={index}><td >{num}</td></tr>)
                    })}
                </tbody>
               
                </table>
                </form>
            </div>
        )
    }
}
 