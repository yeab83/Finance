import React from 'react'
import Hero from '../component/Hero';
import Analyics from '../component/Analyics';
import Newsletter from '../component/Newsletter';
import Cards from '../component/cards';


const Home = () => {
  return (
    <div className='px-6 md:px-12'>
    <Hero/>
    <Analyics/>
    <Newsletter/>
    <Cards/>
   
    </div>
  )
}

export default Home