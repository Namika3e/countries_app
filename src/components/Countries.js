import { Link } from "react-router-dom";
// import DropDown from "./DropDown";
// import SearchBar from "./SearchBar";


export default function Countries(props) {
    let data = props.data;
    let regions = props.regions;

    let styles = props.darkMode ? {
      backgroundColor : "hsl(209, 23%, 22%)",
      boxShadow : "none",
      color : "hsl(0, 0%, 100%)",
  } : {
      backgroundColor: "white",
      boxShadow : "0 0 10px hsl(0, 0%, 85%)",
      color : "hsl(200, 15%, 8%)"
  }

    const eachCountry = data.map(countries => {
        if (regions === countries.region) {
          return (
          <div className="countries">
         <Link to = {`/countries/${countries.name.common}`} key={countries.name.common} className ="link countries-section-box"> <section className="countries-section pt" >
            <div className="countries-div-box" style={styles}>
                    <div className="flags-img-box"><img src={countries.flags.png} alt="country flag" className="flags-img"/></div>
                   <div className="countries-info-textbox font-link"> 
                    <h2>{countries.name.common}</h2>
                    <p><span>Population:</span> {countries.population}</p>
                    <p><span>Region:</span> {countries.region}</p>
                    <p><span>Capital:</span> {countries.capital}</p>
                   </div>
                    </div>
                    </section></Link></div>
          )
        } else if (regions === 'All') {
          return (
            <div className="countries">
            <Link to = {`/countries/${countries.name.common}`} key={countries.name.common} className="link countries-section-box"> <section className="countries-section pt" >
            <div className="countries-div-box" style={styles}>
                    <div className="flags-img-box"><img src={countries.flags.png} alt="country flag" className="flags-img"/></div>
                   <div className="countries-info-textbox font-link"> 
                    <h2>{countries.name.common}</h2>
                    <p><span>Population:</span> {countries.population}</p>
                    <p><span>Region:</span> {countries.region}</p>
                    <p><span>Capital:</span> {countries.capital}</p>
                   </div>
                    </div>
                    </section></Link></div>
          )
        }
      })


    



    return(
        <main className="each-country-box">
           {eachCountry}
           </main>
    )
}


