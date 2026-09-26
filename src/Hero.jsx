import "./css-file/hero.css";
// import { motion } from "motion/react";
import locationImage from "./assets/location.svg";
import heroImage from "./assets/hero-image.avif";
import { Services } from "./Services";
import { WhyChooseUs } from "./WhyChooseUs";
import {backIn, motion} from "motion/react"



export const Hero = () => {
    return(<>
       <div className="main-hero">
            <div className="style-box1"></div>
            <div className="style-box2"></div>    
            <div className="style-box3"></div>    
            <div className="style-box4"></div>    
            <div className="style-box5"></div>    
        </div>

   
        {/* <div className="hero-section">
            <div className="titiles-and-image">

            <div className="titiles">
            <div className="hero-head">
            Your everyday essentials hub
            </div>

           <div className="hero-h">
            <h1>Charge up. Connect. Chill.</h1>
           </div>

        <div className="hero-p">
          <p>Phone charging, quality accessories, data, entertainment, and cold drinks — all in one friendly neighborhood spot.</p>
        </div>

        <div className="hero-buttons">
            <button className="hero-button1">Explore Services</button>
            <button className="hero-button2">Contact Us</button>
        </div>

        <div className="location">
            <img style={{
                width: "30px"
            }} src={locationImage} alt="location" />
            <p>Conveniently close to you</p>
        </div>        
    </div>

          <div className="hero-image">
          <img style={{
            width: "100%", height: "100%", borderRadius: "20px"
          }} src={heroImage} alt="" />
          <div className="image-details">
                <p>One easy stop</p>
                <p>Stay powered & refreshed</p>
            </div>
         </div>

    
     </div>
     </div> */}

     <section id="#hero" className="hero">
      <div 
    //   initial={{opacity: 0, y: 11, scale: 0.7}} transition={{duration: 0.3, ease: "backIn"} }
    //   whileInView={{opacity: 1, y: -11, scale: 1}}
      className="hero-title">
         <motion.div initial={{y: 2, opacity: 0}}
         whileInView={{opacity: 1, y: -2}}
         transition={{duration: 0.1, ease: "easeIn"}}
          className="hero-head">
            Your everyday essentials hub
        </motion.div>

        <motion.div initial={{y: 2, opacity: 0}}
         whileInView={{opacity: 1, y: -2}}
         transition={{duration: 0.3, ease: "easeIn"}}
        className="hero-h">
            <h1>Charge up. Connect. Chill.</h1>
        </motion.div>

        <motion.div 
        initial={{y: 0.3, opacity: 0}}
         whileInView={{opacity: 1, y: -0.2}}
         transition={{ duration: 0.3, ease: "backOut"}}
         
        className="hero-p">
          <p>Phone charging, quality accessories, data, entertainment, and cold drinks — all in one friendly neighborhood spot.</p>
        </motion.div>

        <div className="hero-buttons">
            <a className="hero-button-link-1" href="#services">
                <button className="hero-button1">Explore Services</button>
            </a>
            
            {/* <button className="hero-button2">Contact Us</button> */}
        </div>

        <div className="location">
            <img style={{
                width: "30px"
            }} src={locationImage} alt="location" />
            <p>Conveniently close to you</p>
        </div>

      </div>
       <motion.div 
       initial={{opacity: 0, y: 11, scale: 0.7}} transition={{duration: 0.5, ease: "backIn"} }
      whileInView={{opacity: 1, y: -11, scale: 1}}
       className="hero-images">
           <img style={{
            width: "100%", height: "100%", borderRadius: "20px"
          }} src={heroImage} alt="" />
          <div className="image-details">
                <p className="green-p">One easy stop</p>
                <p>Stay powered & refreshed</p>
            </div>
       </motion.div>

     </section>
      </>
    )
}