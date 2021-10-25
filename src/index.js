import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/App/App.css";
//import App from "./components/App/App";
//import Contador from "./components/Contador/Contador";
//import DibujosComplejos from "./components/DibujosComplejos/DibujosComplejos";
//import Deportes from './components/Deportes/Deportes';
//import Comics from "./components/Comic/Comics";
//import Jugadores from "./components/Jugadores/Jugadores";
import reportWebVitals from "./reportWebVitals";
//import TablaMultiplicarSelect from "./components/Formularios/TablaMultiplicarSelect";
//import PracticsCollatz from "./components/Formularios/PracticsCollatz";
//import TablaMultiplicarCheck from "./components/Formularios/TablaMultiplicarCheck";
import SeleccionMultiple from "./components/Formularios/SeleccionMultiple";
// import Router from "./components/Router";
// import MenuRutas from "./components/Rutas/MenuRutas";
// import EjemploSimple from "./components/Formularios/EjemploSimple";
 //import Collatz from "./components/Formularios/Collatz";
// import TablaMultiplicar from "./components/Formularios/TablaMultiplicar";
//import Cine from "./components/Rutas/Cine";
//import Television from "./components/Rutas/Television";
//import Musica from "./components/Rutas/Musica";
//import Home from "./components/Rutas/Home";
;

//import Numeros from "./components/Numeros/Numeros";

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      {/* <Contador Inicio="25" />
      <Contador Inicio="11" /> */}
      {/* <DibujosComplejos /> */}
      {/* <Deportes/> */}
      {/* <Numeros/> */}
      {/* <Comics/>  */}
      {/* <Jugadores/> */}
      {/* <MenuRutas/>
     <Router/> */}
     {/* <EjemploSimple/> */}
     {/* <Collatz/> */}
     {/* <TablaMultiplicar/> */}
     {/* <TablaMultiplicarSelect/> */}
     {/* <PracticsCollatz/> */}
     {/* <TablaMultiplicarCheck/> */}
     <SeleccionMultiple/>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
