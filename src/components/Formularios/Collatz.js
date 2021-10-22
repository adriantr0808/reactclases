import React, { Component } from 'react'

export default class Collatz extends Component {
    
    cajaNumero = React.createRef();
    
    state = {
        collatz:[]
        
    }

    recibirNumero = (e) =>{
        e.preventDefault();
         var num = this.cajaNumero.current.value;
         var array = [];
    
         array.push(num);
         while(num!=1){
           
            if(num % 2==0){
                num = num/2;
            }else{
                num=(num*3)+1;
            }
            
            array.push(num);
         }
         this.setState({
            collatz: array
         });         
       
       
        
    }
  
    render() {
        return (
            <div>
                <h1>Conjetura de Collatz</h1>
                <form onSubmit={this.recibirNumero}>
                    <div style={{margin:'1em'}}>
                    <label>Introduce un numero: </label>
                    <input type='number' ref={this.cajaNumero}/>
                    </div>
                    <button>Mostrar secuencia de Collatz</button>
                </form>
                <div>
                    <ul style={{listStyleType: 'none'}}>
                  {this.state.collatz.map((num, index)=>{
                      return(<li key={index}>{num}</li>)
                  })}
                  </ul>
                </div>
            </div>
        )
    }
}
