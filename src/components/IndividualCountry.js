import Body from "./Body"
import Countries from "./Countries";
import { useState,useEffect } from "react";
import { Link,  useParams } from "react-router-dom";

export default function IndividualCountry (props) {
const [data, setData] = useState([]);

const { countriesId } = useParams()

useEffect(function() {
    fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(response => {
        // console.log(response);
        setData(response)
    })
    .catch(err => alert(err.message))
  }, []);

//   DARK MODE STYLES

  let styles = props.darkMode ? {
    backgroundColor: "hsl(207, 26%, 17%)",
    boxShadow : "none",
    color : "hsl(0, 0%, 100%)",
} : {
    boxShadow : "0 0 6px hsl(0, 0%, 85%)",
    color : "hsl(200, 15%, 8%)"
};

let backBtn = props.darkMode ? {
    backgroundColor : "hsl(209, 23%, 22%)",
    boxShadow : "0 0 5px hsl(0, 0%, 10%)",
    color : "hsl(0, 0%, 100%)",
} : {
    boxShadow : "0 0 6px hsl(0, 0%, 85%)",
    color : "hsl(200, 15%, 8%)"
};

let arrowImg = props.darkMode ? "../icons/left-white-arrow.png" : "../icons/left-arrow.png";

let removeBoxShadow = props.darkMode ? {boxShadow: "none"} : {boxShadow: " 0 0 10px hsl(0, 0%, 80%)"}


// EACH COUNTRY SECTION
  const country = data.map(item=> {
    let borders; 
    let tiles;
    if (countriesId === item.name.common) {
        let otherName = Object.values(item.name.nativeName)
        let currency = Object.values(item.currencies);
        let languageArr = Object.values(item.languages)
        let languages = languageArr.join(', ')
        let hasBorders =  item.hasOwnProperty('borders');

        if (hasBorders) {
             borders = Object.values(item.borders);
             tiles = borders.map(border=> {
                return (
                    <div className="tiles" style={backBtn}><p>{border}</p></div>
                )
            })
        }
        
        return (
            <article key = {item.name.common} className='individual-section height' >
                <section className="flag-box">
                    <img src={item.flags.png} alt="country-flag" className="flag-img" style={removeBoxShadow}/>
                </section>

            <div className="individual-country-info-box">
                <div className="country-name-div"><h2 className="country-name">{item.name.common}</h2></div>

            <div className="country-info-div">
                <section className="country-info-1">
                    <p className="country-info-p"><span>Native Name:</span> {otherName[0].common} </p>
                    <p className="country-info-p"><span>Population: </span> {item.population} </p>
                    <p className="country-info-p"><span>Region: </span> {item.region} </p>
                    <p className="country-info-p"><span>Sub Region: </span> {item.subregion} </p>
                    <p className="country-info-p"><span>Capital: </span> {item.capital} </p>
                </section>

                <section className="country-info-2">
                <p className="country-info-p"><span>Top Level Domain: </span> {item.tld} </p>
                <p className="country-info-p"><span>Currencies: </span> {currency[0].name} </p>
                <p className="country-info-p"><span>Languages: </span> {languages} </p>
                </section>
                </div>

                { hasBorders && <section className="borders-section">
                <h3>Border Countries: </h3>

                <section className="tiles-section">
                    {tiles}
                </section>
                
            </section> }
            </div>

                

            </article>
        )
    }
  })


  return (
        <main className="height individual-country-main-box" style={styles}>
            <Link to = '/' className="link inline-block"><div className ='back-mainBox'>
            <div className="back-arrow-box" style={backBtn}>
                <img src={arrowImg} alt="back arrow" className="back-arrow-img"/>
                <p className="back-text">Back</p>
            </div>
            </div></Link>
            {country}
        
        </main>
    )
}