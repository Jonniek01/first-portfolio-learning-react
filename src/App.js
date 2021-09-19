import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar.js";
import Header from "./components/Header.js";
import About from "./components/About.js";

import Particles from 'react-particles-js';
import Projects from './components/Projects';
import Contacts from './components/Contacts';


function App() {
  return (
    <>
    <Particles
    className="particles-canvas"
   params={{
     particles:{
       number:{
         value:45,
         density:{
           enable:true,
           value_area:900
         }
       },
       shape:{
         type:"circle",
         stroke:{
           width:15,
           color:"#f9ab00"
         }
       }
     }

   }}
    />
     <Navbar/>
     <Header/>

   
     <About/>
     
   
    
    </>
  );
}

export default App;
