import { Routes, Route } from "react-router-dom";
import { About } from './About.jsx';

import { Header } from './Header.jsx'
import { Hero } from './Hero.jsx'
import { HowItWork } from './HowItWork.jsx'
import { CustomersSay } from './CustomersSay.jsx'
import { Product } from './Product.jsx'
import { Services } from './Services.jsx'
import { WhyChooseUs } from './WhyChooseUs.jsx'
import { Contact } from './Contact.jsx'
import { GetInTouch } from './GetInTouch.jsx'
import { Footer } from './Footer.jsx'
import { Home } from "./Home.jsx";


function App() {
  
  return (
    <>
   <Header />

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/product" element={<Product />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
    </>
  )
}

export default App
