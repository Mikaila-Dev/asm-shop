import leftImage from "./assets/about-image.avif";
import "./css-file/about.css"
export function About(){
    return(
        <section className="about">

            <div className="about-left-side">
               <img style={{
                width: "100%", height: "100%"
               }} src={leftImage} alt="" />
            </div>

            <div className="about-right-side">
                <div className="about-head">
                    <p>Our story</p>
                </div>

                <div className="about-h">
                    <h1>About Us</h1>
                </div>

                <div className="about-p">
                    <p>More Than Just a Shop</p>
                </div>

                <div className="about-paragraph">
                    <p>We’re here to make your everyday needs easier, faster, and more convenient. From phone accessories, data and airtime to charging, entertainment, and refreshing drinks, we bring essential services together in one trusted place.</p>
                </div>

                <div className="about-spans">
                    <span>✓ Fast & Convenient</span>
                    <span>✓ Reliable Service</span>
                    <span>✓ Fair Prices</span>
                    <span>✓ Customer First</span>
                </div>

                <div className="about-learn-more">
                    <a href="#">Learn More →</a>
                </div>
            </div>
        </section>

    )
}