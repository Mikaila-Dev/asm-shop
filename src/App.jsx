
import { About } from './About'
import './App.css'
import { Header } from './Header'
import { Hero } from './Hero'
import { HowItWork } from './HowItWork'
import { CustomersSay } from './CustomersSay.jsx'
import { Product } from './Product'
import { Services } from './Services'
import { WhyChooseUs } from './WhyChooseUs'
import { Contact } from './Contact.jsx'

function App() {
  
  return (
    <>
    <Header />
    <Hero />
    <Services />
    <WhyChooseUs />
    <Product />
    <About />
    <HowItWork />
    <CustomersSay />
    <Contact />
    </>
  )
}

export default App
