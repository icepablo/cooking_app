import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

//<FontAwesomeIcon icon="fa-solid fa-utensils" />
//           <FontAwesomeIcon icon="fa-solid fa-bowl-rice" />

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="Navbar">
            <span className="nav-logo">MealHelper 
            <FontAwesomeIcon icon={solid("fire-burner")} bounce />
            </span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/">Home</a>
                <a href="/meals/summary">Podsumowanie</a>
                <a>logo</a>
                <a href="/">About me</a>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=>setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>
    );
}
export default Navbar;
