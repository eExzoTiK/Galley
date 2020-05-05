import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header";
import logo from './Components/logo.png';
import Body from './Components/Body';
import Slider from './Components/Slider';



function App() {
  return (
      <div>
   <Header />
   <br/>
   <Body />
   <br/>
   <Slider />
      </div>
  );
}

export default App;
