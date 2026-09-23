import pixel from "./assets/pexel.avif";
import "./css-file/product.css";
import {motion} from "motion/react"

export function Product(){
   return(
    <section id="product" className="product">

        <motion.div
        initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
        transition={{ease: "backIn", duration: 0.1}}
        className="product-head">
            <p>Ready when you are</p>
        </motion.div>

        <motion.div 
        initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
        transition={{ease: "backIn", duration: 0.3}}
        className="product-h">
            <h1>Featured Products</h1>
        </motion.div>

        <motion.div 
        initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 0.8, y: -10, scale: 1}}
        transition={{ease: "backIn", duration: 0.5}}
        className="product-p">
            <p>Explore our customer favorites.</p>
        </motion.div>
        
        <div className="main-product">
            <motion.div
            initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
            whileHover={{y: -20}} transition={{ease: "backIn", duration: 0.1}}
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
                    <a href="#">Enquire →</a>
                </div>
               </div>

            </motion.div>

            <motion.div
            initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
        whileHover={{y: -20}} transition={{ease: "backIn", duration: 0.3}}
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
                    <a href="#">Enquire →</a>
                </div>
              </div>
        
               </motion.div>

            <motion.div 
            initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
        whileHover={{y: -20}} transition={{ease: "backIn", duration: 0.5}}
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
                    <a href="#">Enquire →</a>
                </div>
               </div>
            </motion.div>
            
            <motion.div 
            initial={{opacity: 0, y: 10, scale: 0.9}} whileInView={{opacity: 1, y: -10, scale: 1}}
        whileHover={{y: -20}} transition={{ease: "backIn", duration: 0.1}}
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
                    <a href="#">Enquire →</a>
                </div>
               </div>
            </motion.div>

        </div>
    </section>
   )
}