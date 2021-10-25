import React, { Component } from 'react'
    
    export default class TablaMultiplicarCheck extends Component {


      

        state = {
            check: false,
            tabla:[],
            num: 0,
            checksArr:[]
        }

        //Funcion que en principio generaba los checksbox pero ahora genera solo los numeros
        generarCheck = (e) =>{
            e.preventDefault();
            var checks = []

            for(var i =0; i<=5; i++){
                var aleatorio = Math.round((Math.random()*50)+1);
               // checks.push(<div key={i}><label>{aleatorio}</label><input type='checkbox' onChange={this.cambio} value={aleatorio}></input></div>);
                checks.push(aleatorio);
            }

          this.setState({
              checksArr:checks
          });
            
            //return checks
        }

        //Funcion que determina si el checkbox esta marcado o no y se crea la tabla de multiplicar
        cambio = (e) =>{
            this.setState({
                check: e.target.checked
            });
            
            var array = []; // Array para guardar los resultados de las multiplicaciones

            if(this.state.check === false){
              var numero = e.target.value;
              for( var i = 0; i <= 10; i++){
                var multi = numero * i;
                array.push(multi);
                
              } 

              //Guardamos en la variable de estado tabla el array con los resultados y el numero que hemos 
              //seleccionado, el numero es necesario para mostrar el resultado de 5*1 5*2... el numero 5 se repite por eso es necesario
              this.setState({
                tabla:array,
                num: numero
              });
            }
        }

       

       

        render() {
            return (
                <div>

                <form onSubmit={this.generarCheck}>
                <button >Generar numeros</button>
                <div>{this.state.checksArr.map((num, index) => {
                   return(<div><label key={index}>{num}</label><input type='checkbox' value={num} onChange={this.cambio}></input></div>)
                })}</div>
                </form>

                <div>
                    <table border='1' style={{margin:'auto'}}>
                    <thead>
                        <tr>
                            <th>
                                Operación
                            </th>
                            <th>
                                Resultado
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                       {this.state.tabla.map((num, index) =>{
                           return(<tr key={index}><td>{this.state.num} * {index}</td><td>{num}</td></tr>)
                       })}
                    </tbody>
                    </table>
                </div>

                  
                </div>
            )
        }
    }
    