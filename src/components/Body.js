// import SearchBar from "./SearchBar";
// import DropDown from "./DropDown";
// import Countries from "./Countries";
// import { useEffect, useState } from "react";
// import IndividualCountry from "./IndividualCountry";
// import {  Routes, Route} from "react-router-dom";
// import Home from "./Home";
// import Th from './Th'




// export default function Body() {

//     const [data , setData] = useState([]);

// useEffect(function() {
//     fetch("https://restcountries.com/v3.1/all")
//     .then(res => res.json())
//     .then(response => {
//         // console.log(response);
//         setData(response)
//     })
//     .catch(err => alert(err.message))
// }, []);
// // let country = <h2>{currentCountry.name.common}</h2>;

//   function viewCountry (id) {
//     let me;
//     for (let i = 0; i < data.length; i++)  {
//         let currentCountry = data[i];
//         if (currentCountry.name.common === id) {
//              console.log(currentCountry.name.common)
            
              
        
//         }
        
        
//     }
//     return me;

//     };
//     // console.log(country)

// // const viewCountry = data.map(id => {
// //     if(data.name.common === id.name.common) {
// //        return console.log(id.name.common)
// //     }
// // })



    
    

    





// const eachCountry = data.map(countries => {
// return <Countries  
// id = {countries.name.common}
// flag = {countries.flags.png}
// region = {countries.region}
// capital= {countries.capital}
// population = {countries.population}
// name = {countries.name.common}
// viewCountry = {viewCountry}
// />


// });
//     return (
//         <>
//         <Routes>
//   <Route exact path = '/' element = {<Home eachCountry = {eachCountry} hi = {eachCountry.id}/>} /> 
//   <Route exact path = '/IndividualCountry' element = {<IndividualCountry />}  />
  
  
// </Routes>
//         </>
//     )
//     }




    