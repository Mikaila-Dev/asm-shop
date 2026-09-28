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

   
       
     <section id="#hero" className="hero">
      <div 
    //   initial={{opacity: 0, y: 11, scale: 0.7}} transition={{duration: 0.3, ease: "backIn"} }
    //   whileInView={{opacity: 1, y: -11, scale: 1}}
      className="hero-title">
         <motion.div initial={{y: 5, opacity: 0}}
         whileInView={{opacity: 1, y: -5}}
         transition={{duration: 1.5, ease: "anticipate"}}
         viewport={{once: true}}
          className="hero-head">
            Your everyday essentials hub
        </motion.div>

        <motion.div initial={{y: 5, opacity: 0}}
         whileInView={{opacity: 1, y: -5}}
         transition={{duration: 1.5, ease: "anticipate"}}
         viewport={{once: true}}
        className="hero-h">
            <h1>Charge up. Connect. Chill.</h1>
        </motion.div>

        <motion.div 
        initial={{y: 5, opacity: 0}}
         whileInView={{opacity: 1, y: -5}}
         transition={{duration: 1.5, ease: "anticipate"}}
         viewport={{once: true}}
        className="hero-p">
          <p>Phone charging, quality accessories, data, entertainment, and cold drinks — all in one friendly neighborhood spot.</p>
        </motion.div>

        <motion.div 
        initial={{y: 5, opacity: 0}}
         whileInView={{opacity: 1, y: -5}}
         transition={{duration: 1.5, ease: "anticipate"}}
         viewport={{once: true}}
        className="hero-buttons">
            <a className="hero-button-link-1" href="#services">
                <button className="hero-button1">Explore Services</button>
            </a>
            
            
        </motion.div>
         
        <motion.div 
        initial={{y: 5, opacity: 0}}
         whileInView={{opacity: 1, y: -5}}
         transition={{duration: 1.5, ease: "anticipate"}}
         viewport={{once: true}}
        className="location">
            <img style={{
                width: "30px"
            }} src={locationImage} alt="location" />
            <p>Conveniently close to you</p>
        </motion.div>

      </div>
       <motion.div 
         initial={{y: 5, opacity: 0}}
         whileInView={{opacity: 1, y: -5}}
         transition={{duration: 1.9, ease: "anticipate"}}
         viewport={{once: true}}
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