import React from 'react'
import Header from '../header/Header';
import Hero from '../hero/Hero';
import About from '../about/About';
import Footer from '../footer/Footer';
import Contact from '../contact/Contact';
import ProductsRow from '../ProductsRow/ProductsRow';
  

const Home = () => {

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <ProductsRow /> 
      <Contact />
      <Footer />
    </div>
  )
}

export default Home