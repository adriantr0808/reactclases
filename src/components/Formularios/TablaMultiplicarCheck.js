import React, { Component } from 'react'
    
    export default class TablaMultiplicarCheck extends Component {


        numero = React.createRef();

        state = {
            check: false
        }


        cambio = (e) =>{
            this.setState({
                check: e.target.checked
            });
            console.log(this.state.check);

            if(this.state.check==false){
                console.log(e.target.value);
            }
        }

       

       

        render() {
            return (
                <div style={{display:'inline-block'}}>
                   
                 <label>4</label>
                 <input type='checkbox' onChange={this.cambio} value='4'/>
                 <label>5</label>
                 <input type='checkbox' onChange={this.cambio} value='5'/>
                   
            

                  
                </div>
            )
        }
    }
    