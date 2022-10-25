import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


//<FontAwesomeIcon icon="fa-solid fa-utensils" />
//           <FontAwesomeIcon icon="fa-solid fa-bowl-rice" />

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="Navbar">
            <span className="nav-logo">MealHelper 
            <FontAwesomeIcon icon={"fa-fire-burner"} style={{fontSize:32}}/>
            </span>
            <div className={`nav-items ${isOpen && "open"}`}>
                <a href="/">Home</a>
                <a href="/meals/summary">Podsumowanie</a>
                <a>Demo</a>
                <a href="/">About me</a>
            </div>
            <div className={`nav-toggle ${isOpen && "open"}`} onClick={()=>setIsOpen(!isOpen)}>
                <div className="bar"></div>
            </div>
        </div>
    );
}
export default Navbar;
