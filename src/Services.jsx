import "./css-file/services.css";
import smartPhone from "./assets/smart-phone.svg";
import wifi from "./assets/wifi.svg"
import movies from "./assets/movies.svg";
import drinks from "./assets/drinks.svg";
import { motion, spring } from "motion/react";

export const Services = () => {
   return(
    <div id="services" className="services">
    <motion.div
    initial={{opacity: 0, y: 11}}
   transition={{duration: 0.1, ease: "backIn", bounce: "spring"} }
   whileInView={{opacity: 1, y: -11}}
    className="services-head">
       <p>Our services</p>
    </motion.div>

    <motion.div 
    initial={{opacity: 0, y: 11}}
      transition={{duration: 0.3, ease: "backIn", bounce: "spring"} }
      whileInView={{opacity: 1, y: -11}}
    className="services-h">
      <h1>What We Offer</h1>
    </motion.div>

    <motion.div 
    initial={{opacity: 0, y: 11}} transition={{duration: 0.5, ease: "backIn", bounce: "spring"} }
    whileInView={{opacity: 0.8, y: -11}}
    className="services-p">
       Simple everyday solutions, thoughtfully brought together for your convenience.
    </motion.div>

    <div className="main-services" id="#phone">
      
      <motion.div 
        initial={{opacity: 0, y: 10, scale: 0.9}}
        whileInView={{opacity: 1, y: -10, scale: 1}}
        whileHover={{y: -20}}
        transition={{ease: "backIn", duration: 0.1}}
      className="phone-accenssories">
        <div className="service-svg">
          <img style={{
            width: "40px"
          }} src={smartPhone} alt="" />
        </div>
        <div className="service-title">
            <h3>Phone Accessories</h3>
        </div>

        <div className="service-paragraph">
            <p>Get quality accessories for your everyday phone needs, from chargers and cables to earphones and more.</p>
        </div>
        <div className="service-more">
          <span>Quality Cables</span>
          <span>Fast Chargers</span>
          <span>Earphones</span>
          <span>Phone Cases</span>
          <span>Screen Protectors</span>
        </div>
      </motion.div>

      <motion.div
      initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
      whileHover={{y: -20}} transition={{ease: "backIn", duration: 0.3}}
      className="data-and-airtime">
         <div className="service-svg">
            <img style={{
                width: "40px"
            }} src={wifi} alt="" />
         </div>
         
         <div className="service-title">
           <h3>Data & Airtime</h3>
         </div>

         <div className="service-paragraph">
            <p>Stay connected with fast and reliable data and airtime services, available whenever you need them.</p>
         </div>

         <div className="service-more">
            <span>Data Bundles</span>
            <span>Airtime</span>
            <span>MTN</span>
            <span>Airtel</span>
            <span>Glo</span>
            <span>9mobile</span>
         </div>
      </motion.div>

      <motion.div 
      initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
      whileHover={{y: -20}} transition={{ease: "backIn", duration: 0.5}}
      className="movies">
        <div className="service-svg">
          <img style={{
            width: "40px"
          }} src={movies} alt="" />
        </div>

        <div className="service-title">
           <h3>Movies</h3>
        </div>

        <div className="service-paragraph">
          <p>Enjoy your favorite Kannywood and Bollywood movies, all available in one convenient place.</p>
        </div>

        <div className="service-more">
            <span>Kannywood</span>
            <span>Bollywood</span>
            <span>Latest Movies</span>
            <span>Classic Movies</span>
        </div>
      </motion.div>

      <motion.div 
      initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
      whileHover={{y: -20}} transition={{ease: "backIn", duration: 0.1}}
      className="drinks">
         <div className="service-svg">
           <img style={{
            width: "40px"
           }} src={drinks} alt="" />
         </div>

         <div className="service-title">
            <h3>Cold Drinks</h3>
         </div>

         <div className="service-paragraph">
            Refresh yourself with a variety of cold and refreshing drinks, perfect for every moment and occasion.
         </div>

         <div className="service-more">
            <span>Soft Drinks</span>
            <span>Energy Drinks</span>
            <span>Water</span>
            <span>Juices</span>
            <span>Cold & Fresh</span>
         </div>
      </motion.div>
    </div>
</div>
   )
}