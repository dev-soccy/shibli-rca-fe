
import { useEffect } from 'react';
import Footer from './Components/Footer';
import HomePage from './Components/HomePage';
import NavBar2 from './Components/NavBar2';
import Navbar from './Components/Navbar';
import SocialBar from './Components/SocialBar';


function App() {
  
  return (
    <div className='main-page'>
    <Navbar/>
    <SocialBar/>
    <HomePage/>
    <Footer/>
    <NavBar2/>
    </div>
  );
}

export default App;
