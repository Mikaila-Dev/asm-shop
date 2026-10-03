import { About } from "./About";
import { Contact } from "./Contact";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { Product } from "./Product";
import { Services } from "./Services";
import { WhyChooseUs } from "./WhyChooseUs";
import { HowItWork } from "./HowItWork.jsx"
import { GetInTouch } from "./GetInTouch";
import { CustomersSay } from "./CustomersSay.jsx";
import { useEffect } from "react";

export function Home(){

    useEffect(() => {
     const element = document.getElementById('home');
     if(element){
        element.scrollIntoView({behavior: "smooth"})
     }
    })
    return(
        <div id="home">
        {/* <Header /> */}
        <Hero />
        <Services />
        <WhyChooseUs />
        <Product />
        <About />
        {/* <CustomerSay */}
        <HowItWork />
        <CustomersSay />
        <Contact />
        <GetInTouch />
        </div>
    )
}