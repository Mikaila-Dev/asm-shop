import pixel from "./assets/pexel.avif";
import "./css-file/product.css";
import {motion} from "motion/react"
import { useEffect } from "react";

export function Product(){

    useEffect(() => {
    const element = document.getElementById("products");

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  }, []);


   return(
    <section id="products" className="product">

        <motion.div
        initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
        transition={{ease: "backIn", duration: 0.1}}
        viewport={{once: true}}
        className="product-head">
            <p>Ready when you are</p>
        </motion.div>

        <motion.div 
        initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
        transition={{ease: "backIn", duration: 0.2}}
        viewport={{once: true}}
        className="product-h">
            <h1>Featured Products</h1>
        </motion.div>

        <motion.div 
        initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 0.8, y: -10, scale: 1}}
        transition={{ease: "backIn", duration: 0.3}}
        viewport={{once: true}}
        className="product-p">
            <p>Explore our customer favorites.</p>
        </motion.div>
        
        <div className="main-product">
            <motion.div
            initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
            whileHover={{y: -20}} transition={{ease: "backIn", duration: 0.1}}
            viewport={{once: true}}
            className="product-card">
               <img style={{
                
               }} src={pixel} alt="pixel" />

               <div className="product-title">
                <h4>Earphones</h4>
               </div>

               <div className="product-description">
                <p>Clear sound for calls, music, and movies.</p>
               </div>

               <div className="price-and-order-button">
                <h4>From ₦3,000</h4>
                <div className="enquire">
                    <a href="#contact">Enquire →</a>
                </div>
               </div>

            </motion.div>

            <motion.div
            initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
            whileHover={{y: -20}} transition={{ease: "backIn", duration: 0.2}}
            viewport={{once: true}}
            className="product-card">
               <img style={{
                
               }} src={pixel} alt="pixel" />

               <div className="product-title">
                <h4>Earphones</h4>
               </div>

               <div className="product-description">
                <p>Clear sound for calls, music, and movies.</p>
               </div>

               <div className="price-and-order-button">
                <h4>From ₦3,000</h4>
                <div className="enquire">
                    <a href="#contact">Enquire →</a>
                </div>
              </div>
        
               </motion.div>

            <motion.div 
            initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
            whileHover={{y: -20}} transition={{ease: "backIn", duration: 0.3}}
            viewport={{once: true}}
            className="product-card">
               <img style={{
                
               }} src={pixel} alt="pixel" />

               <div className="product-title">
                <h4>Earphones</h4>
               </div>

               <div className="product-description">
                <p>Clear sound for calls, music, and movies.</p>
               </div>

               <div className="price-and-order-button">
                <h4>From ₦3,000</h4>
                <div className="enquire">
                    <a href="#contact">Enquire →</a>
                </div>
               </div>
            </motion.div>
            
            <motion.div 
            initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
            whileHover={{y: -20}} transition={{ease: "backIn", duration: 0.1}}
            viewport={{once: true}}
            className="product-card">
               <img style={{
                
               }} src={pixel} alt="pixel" />

               <div className="product-title">
                <h4>Earphones</h4>
               </div>

               <div className="product-description">
                <p>Clear sound for calls, music, and movies.</p>
               </div>

               <div className="price-and-order-button">
                <h4>From ₦3,000</h4>
                <div className="enquire">
                    <a href="#contact">Enquire →</a>
                </div>
               </div>
            </motion.div>

        </div>
    </section>
   )
}