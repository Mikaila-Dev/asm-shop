import "./css-file/footer.css";
import facebook from "./assets/facebook.svg";
import insta from "./assets/insta.svg";
import message from "./assets/message.svg";
export function Footer(){
    return(
        <footer className="footer">
        <div className="footer-main">
            <div className="main-section-1">
                <div className="logo-f">
                    ASM
                </div>

                <div className="main-section-1-p">
                    <p>Your friendly local stop for staying powered, connected, entertained, and refreshed.</p>
                </div>

                <div className="main-section-1-link-images">
                    <a href="#">
                    <img src={facebook} alt="" />
                    </a>
                    <a href="#">
                      <img src={insta} alt="" />
                    </a>
                    <a href="#">
                      <img src={message} alt="" />
                    </a>
                </div>
            </div>

            <div className="main-section-2">
                <h3>Quick Links</h3>
                <li><a href="#hero">Home</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#product">Products</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </div>

            <div className="main-section-3">
                <h3>Services</h3>
                <li><a href="#services">Phone Accessories</a></li>
                <li><a href="#services">Data & Airtime</a></li>
                <li><a href="#services">Movies</a></li>
                <li><a href="#services">Cold Drinks</a></li>
                {/* <li><a href="#">Phone Accessories</a></li> */}
            </div>

            <div className="main-section-4">
                <h3>Contact</h3>
                 <li><a href="#">
                    Gadamayo hayin gada
                </a></li>
                 <li><a href="#">
                    +234 911 736 6829
                </a></li>
                 <li><a href="#">
                    mikailamohammad23@gmail.com
               </a>
               </li>
            </div>
        </div>

        <div className="footer-copyright">
        <div>
            <p>ASM GLOBAL VENTURES © All rights reserved</p>
        </div>

        <div>
            <p>Developed by Mikaila-Dev</p>
        </div>
        </div>
        </footer>
    )
}