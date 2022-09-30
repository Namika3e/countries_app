import { useState } from "react"

export default function DropDown(props) {

    let inputStyle = props.darkMode ? {
        backgroundColor : "hsl(209, 23%, 22%)",
        boxShadow: "none",
        color : "hsl(0, 0%, 100%)"
    }
        : {
            backgroundColor : "hsl(0, 0%, 100%)",
            boxShadow : "0 0 6px hsl(0, 0%, 85%)"
        }
    return (
        <section className="drop-down-section">
            <div className="drop-down-div">
                <select name="Regions" id="regions" className="drop-down" onChange={props.handleChange} style={inputStyle}>
                <option value="#">Filter by Region</option>
                <option value="All">All</option>
                <option value="Africa">Africa</option>
                <option value="Americas">Americas</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            </div>
        </section>
    )
}