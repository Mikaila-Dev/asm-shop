import { useState } from "react"
import "./css-file/header.css"
import { Link } from "react-router-dom";
import {motion} from "motion/react"

export const Header = ()=> {
    const [hamburger, setHamburger] = useState(false);
    const [reload, setReload] = useState(0);
   


    const handleClickHamburger = () => {
       setHamburger(!hamburger);
    }
  

    return(
        <header>
        <div className="logo-name">
            <div className="logo">
                ASM
            </div>
        </div>
        <div key={reload} className={!hamburger ? "nav-and-button" : "show"}
        >
        <nav>
            <ul className="nav-links">
               
                <Link className="link" to="/">Home</Link>
                <Link className="link" to="/services">Services</Link>
                <Link className="link" to="/product">Product</Link>
                <Link className="link" to="/about">About</Link>
                <Link className="link" to="/contact">Contact</Link>
            </ul>
        </nav>
    
        </div>
        <div onClick={handleClickHamburger} className="hamburger-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
        </header>
    )
}
