import { motion } from "motion/react";
import "./css-file/why-choose-us.css";
// import { motion } from "motion/react";
import affordable from "./assets/affordable.svg";
import fast from "./assets/fast.svg"
import friend from "./assets/friend.svg";
import reliable from "./assets/reliable.svg";
import location from "./assets/location-2.svg"
export function WhyChooseUs(){
return(
    <section className="why-choose-us">
        <motion.div 
         initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
         transition={{duration: 0.1, ease: "backIn"}}
         viewport={{once: true}}
        className="why-choose-us-head">
           <p>Why locals choose us</p>
        </motion.div>


        <motion.div 
        initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
        transition={{duration: 0.2, ease: "backIn"}}
        viewport={{once: true}}
        className="why-choose-us-h">
           <h1>Why Choose Us</h1>
        </motion.div>

        <motion.div
        initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
        transition={{duration: 0.3, ease: "backIn"}}
        viewport={{once: true}}
        className="why-choose-us-p">
           <p>We make daily essentials feel easy: quick help, dependable service, and a genuinely welcoming stop.</p>
        </motion.div>

        <div className="main-why-choose-us">
            <motion.div 
            initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
            transition={{ease: "backIn", duration: 0.1}}
            viewport={{once: true}}
            className="fast">
                <div className="why-choose-us-svg">
                   <img style={{
                    width: "40px"
                   }} src={fast} alt="fast" />
                </div>
                <div className="why-title">
                    <h3>Fast Service</h3>
                </div>
                <div className="why-paragraph">
                    <p>Quick service, less waiting. Get what you need and get on with your day.</p>
                </div>
            </motion.div>

            <motion.div
            initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
            transition={{ease: "backIn", duration: 0.3}}
            viewport={{once: true}}
             className="reliable">
                <div className="why-choose-us-svg">
                    <img style={{
                    width: "40px"
                   }} src={reliable} alt="reliable" />
                </div>
                <div className="why-title">
                    <h3>Reliable</h3>
                </div>
                <div className="why-paragraph">
                <p>A service you can count on, with consistent care every time.</p>
                </div>
            </motion.div>

            <motion.div
            initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
           transition={{ease: "backIn", duration: 0.5}}
            viewport={{once: true}}
            className="affordable">
                <div className="why-choose-us-svg">
                    <img style={{
                    width: "40px"
                   }} src={affordable} alt="affordable" />
                </div>
                <div className="why-title">
                    <h3>Affordable Prices</h3>
                </div>
                <div className="why-paragraph">
                 <p>More value, less spending, with fair prices across the essentials.</p>
               </div>
            </motion.div>

            <motion.div
            initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}} 
            transition={{ease: "backIn", duration: 0.1}}
            viewport={{once: true}}
            className="friendly">
                <div className="why-choose-us-svg">
                    <img style={{
                    width: "40px"
                   }} src={friend} alt="friend" />
                </div>
                <div className="why-title">
                    <h3>Friendly Customer Service</h3>
                </div>
                <div className="why-paragraph">
                 <p>You’re always welcome here. Expect respectful, helpful service.                </p>
            </div>
            </motion.div>

            <motion.div
            initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
            transition={{ease: "backIn", duration: 0.3}}
            viewport={{once: true}}
            className="convenient">
                <div className="why-choose-us-svg">
                    <img style={{
                    width: "40px"
                   }} src={location} alt="location" />
                </div>
                <div className="why-title">
                    <h3>Convenient Location</h3>
                </div>
                <div className="why-paragraph">
                    <p>Everything you need, close by, in one easy neighborhood stop.</p>
                 </div>
                </motion.div>

        </div>
    </section>
)
}