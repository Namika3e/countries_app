import './App.css';
import Header from './components/Header.js'
import Body from './components/Body';
import SearchBar from './components/SearchBar.js'
import Countries from './components/Countries.js'
import DropDown from './components/DropDown';
import { BrowserRouter, Link } from "react-router-dom";
import IndividualCountry from './components/IndividualCountry';
import Home from './components/Home';
import { useEffect, useState } from "react";
import {  Routes, Route} from "react-router-dom";

function App() {

  const [darkMode , setDarkMode] = useState(false);

    function toggleDarkMode() {
        setDarkMode(prev => !prev);
        console.log(darkMode)
    }
  return (
  <>
   <Header handleClick={toggleDarkMode}  darkMode = {darkMode}/>
   
    <Routes>
      <Route path='/' element={ <Home darkMode = {darkMode}/> } />
      <Route exact path='/countries/:countriesId' element={<IndividualCountry darkMode = {darkMode}/>}/>

    </Routes>
  
  
   
   
   

   
  </>
)

}

  

      
  



export default App;
