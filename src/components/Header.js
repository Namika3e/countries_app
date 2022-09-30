import { useState } from "react"

export default function Header(props) {
let image = props.darkMode  ? "../icons/moon-icon-white.png" : "../icons/moon-outline.svg";
let textColor = props.darkMode ? "white-text" : "dark-mode-text" 
let textColor1 = props.darkMode ? "white-text" : "dark-text";

let styles = props.darkMode ? {
    backgroundColor: "hsl(209, 23%, 22%)"
} : {
    backgroundColor: "white",
    boxShadow: " 0 4px 10px hsl(0, 0%, 85%)"
}

    
    return(
        <header className="header" style={styles}>
            <h2 className ={textColor1}>Where in the world?</h2>
            <div className="dark-mode-box" onClick={ props.handleClick }>
                <div className="icon-box"><img src={image} alt="" className="icon-img"/></div>
                <p className={textColor}>Dark Mode</p>
            </div>
        </header>

    )
}