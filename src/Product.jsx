import pixel from "./assets/pexel.avif";
import "./css-file/product.css";

export function Product(){
   return(
    <section className="product">

        <div className="product-head">
            <p>Ready when you are</p>
        </div>

        <div className="product-h">
            <h1>Featured Products</h1>
        </div>

        <div className="product-p">
            <p>Explore our customer favorites.</p>
        </div>
        
        <div className="main-product">
            <div className="product-card">
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

            </div>

            <div className="product-card">
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

            </div>

            <div className="product-card">
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

            </div>
            
            <div className="product-card">
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

            </div>

        </div>
    </section>
   )
}