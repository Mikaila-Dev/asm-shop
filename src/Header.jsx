import { useEffect, useState } from "react"
import "./css-file/header.css"
export const Header = ()=> {
    const [hamburger, setHamburger] = useState(false);
    const [reload, setReload] = useState(0)

    const handleClickHamburger = () => {
       setHamburger(!hamburger);
    //    setReload(prevKey => prevKey + 1)
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
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
        <button className="contact-button">Contact Us</button>
        </div>
        <div onClick={handleClickHamburger} className="hamburger-button">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
        </div>
        </header>
    )
}