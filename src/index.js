import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/App/App.css";
//import App from "./components/App/App";
//import Contador from "./components/Contador/Contador";
//import DibujosComplejos from "./components/DibujosComplejos/DibujosComplejos";
//import Deportes from './components/Deportes/Deportes';
//import Comics from "./components/Comic/Comics";
import Jugadores from "./components/Jugadores/Jugadores";
import reportWebVitals from "./reportWebVitals";

//import Numeros from "./components/Numeros/Numeros";

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      {/* <Contador Inicio="25" />
      <Contador Inicio="11" /> */}
      {/* <DibujosComplejos /> */}
      {/* <Deportes/> */}
      {/* <Numeros/> */}
      {/* <Comics/> */}
      <Jugadores/>


    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
