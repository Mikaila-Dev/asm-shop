import "./css-file/get-in-touch.css";
import { motion } from "motion/react";
export function GetInTouch(){
   return(
    <section className="get-in-touch">
    <motion.div 
    initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
    transition={{ease: "backIn", duration: 0.2}}
    viewport={{once: true}}
    className="get-in-touch-h">
        <h1>Everything You Need, All in One Place.</h1>
    </motion.div>

    <motion.div 
    initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
    transition={{ease: "backIn", duration: 0.2}}
    viewport={{once: true}}
    className="get-in-touch-p">
        <p>Quality products, reliable service, and friendly care.</p>
    </motion.div>

    <motion.div 
    initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
    transition={{ease: "backIn", duration: 0.2}}
    viewport={{once: true}}
    className="get-in-touch-a">
        <a href="#contact">
            Get in Touch
        </a>
    </motion.div>
    </section>
   )
}