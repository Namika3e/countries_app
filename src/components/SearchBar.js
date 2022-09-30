import {useState} from 'react'
import { Link } from 'react-router-dom';
export default function SearchBar(props) {
    const [search, setSearch] = useState('');
    const data = props.data;

    function onChange(event) {
        setSearch(event.target.value);
    }




    // let styles = props.darkMode ? {
    //     backgroundColor: "hsl(207, 26%, 17%)"
    // } : {
    //     backgroundColor: "white"
    // }

    let inputStyle = props.darkMode ? {
        backgroundColor : "hsl(209, 23%, 22%)",
        boxShadow: "none",
        color: "hsl(0, 0%, 100%)"
    }
        : {
            backgroundColor : "hsl(0, 0%, 100%)",
            boxShadow : "0 0 6px hsl(0, 0%, 85%)"
        }
        
    



    return (
        <section className="search-bar-section">
            <div className="search-bar-div">
                {/* <img src="../icons/search-icon.png" alt="search icon" className="search-icon"/> */}
                <input type="text" placeholder="Search for a country..." className="search-input" onChange={onChange} style = {inputStyle}/>
            </div>

            {search && <div className='suggestion-box' style={inputStyle}>
                {data.filter(item => {
                    const searchTerm = search.toLowerCase();
                    const countryName = item.name.common.toLowerCase();

                    return searchTerm && countryName.startsWith(searchTerm)
                })
                .map(items => {
                   return <Link to = {`/countries/${items.name.common}`} className = "link"><div className='suggestion-box-items'> {items.name.common}</div></Link>
                })}

            </div> }
        </section>
    )
}