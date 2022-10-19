import React, { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="Navbar">
            <span className="nav-logo">Logo</span>
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
