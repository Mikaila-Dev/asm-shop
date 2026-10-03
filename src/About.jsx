import leftImage from "./assets/about-image.avif";
import {motion} from "motion/react"
import "./css-file/about.css"
import { useEffect } from "react";
export function About(){
    // useEffect(() => {
    //     const element = document.getElementById('about');
    //     if(element){
    //         element.scrollIntoView({behavior: 'smooth'})
    //     }
    // })
    return(
        <section id="about" className="about">

            <motion.div 
            initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
            transition={{duration: 1, ease: "anticipate"}}
            viewport={{once: true}}
            className="about-left-side">
               <img style={{
                width: "100%", minHeight: "100%"
    
               }} src={leftImage} alt="" />
            </motion.div>

            <motion.div 
            initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
            transition={{duration: 1, ease: "anticipate"}}
            viewport={{once: true}}
            className="about-right-side">
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
                    <a href="#contact">Learn More →</a>
                </div>
            </motion.div>
        </section>

    )
}