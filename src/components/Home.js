import SearchBar from "./SearchBar"
import DropDown from "./DropDown"
import { Link } from "react-router-dom";
import Countries from "./Countries"
import Body from "./Body"
import { useState, useEffect } from "react";
import {  Routes, Route} from "react-router-dom";
import Header from "./Header";
import IndividualCountry from "./IndividualCountry";

export default function Home(props) {
  const [data , setData] = useState([]);
  const [regions , setRegions] = useState('All');

  useEffect(function() {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(response => {
        // console.log(response);
        setData(response)
    })
    .catch(err => alert(err.message))
  }, []);


  function handleChange(e) {
    setRegions(e.target.value);
  }

  // console.log(regions)

  let styles = props.darkMode ? {
    backgroundColor: "hsl(207, 26%, 17%)",
    margin: 0,
    border:"none"
} : {
    backgroundColor: "hsl(0, 0%, 98%)",
    margin: 0
}




 

 
  
  



  
    return (
  <main>
    <div className="search-and-dropdown" style={styles}>
    <SearchBar data = {data} darkMode = {props.darkMode}/>
    <DropDown  handleChange = {handleChange} darkMode = {props.darkMode}/>
    </div>

    <div className="rendered-countries-div height" style={styles}>
    <Countries data = {data} regions = {regions} darkMode = {props.darkMode}/>
    </div>


        

        
  
 


        
  </main>
    )
}


// onClick={()=> props.viewCountry(props.id)


 // const eachCountry = data.map(countries => {
  //   return (
      // <section className="countries-section">
      //               <div className="countries-div-box" >
      //                       <div className="flags-img-box"><img src={countries.flags.png} alt="country flag" className="flags-img"/></div>
      //                      <div className="countries-info-textbox font-link"> 
      //                       <h2>{countries.name.common}</h2>
      //                       <p><span>Population:</span> {countries.population}</p>
      //                       <p><span>Region:</span> {countries.region}</p>
      //                       <p><span>Capital:</span> {countries.capital}</p>
      //                      </div>
      //                       </div>
      //                       </section>
      
  // //   )
  // })