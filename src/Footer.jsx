import "./css-file/footer.css"
export function Footer(){
    return(
        <footer className="footer">
        <div className="footer-main">
            <div className="main-section-1">
                <div className="logo">
                    ASM
                </div>

                <div className="main-section-1-p">
                    <p>Your friendly local stop for staying powered, connected, entertained, and refreshed.</p>
                </div>

                <div className="main-section-1-link-images">
                    <a href="#">

                    </a>
                    <a href="#">

                    </a>
                    <a href="#">

                    </a>
                </div>
            </div>

            <div className="main-section-2">
                <h4>Quick Links</h4>
                <li><a href="#">Home</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Products</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </div>

            <div className="main-section-3">
                <h4>Services</h4>
                <li><a href="#">Phone Accessories</a></li>
                <li><a href="#">Data & Airtime</a></li>
                <li><a href="#">Movies</a></li>
                <li><a href="#">Cold Drinks</a></li>
                {/* <li><a href="#">Phone Accessories</a></li> */}
            </div>

            <div className="main-section-4">
                <h4>Contact</h4>
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

        </div>
        </footer>
    )
}