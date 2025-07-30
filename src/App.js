import react from 'react'
import Navbar from './component/navbar';
import Hero from './component/Hero';
import Analyics from './component/Analyics';
import Newsletter from './component/Newsletter';
import Cards from './component/cards';
import Footer from './component/Footer';

function App() {
  return (
  <div>
    <Navbar/>
    <Hero/>
    <Analyics/>
    <Newsletter/>
    <Cards/>
    <Footer/>
  </div>
  )
}

export default App;
