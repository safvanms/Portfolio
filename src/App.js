import { useContext, React } from 'react';
import Navbar from './Component/Navbar/Navbar';
import './App.css';
import Intro from './Component/Intro/Intro';
import Services from './Component/Services/Services';
import Experience from './Component/Experience/Experience';
import Works from './Component/Works/Works';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import Footer from './Component/Footer/Footer';
import { themeContext } from './Context';


export default function App() {

   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode

   return (
      <div className='App'
         style={{
            background: darkMode ? 'black' : '',
            color: darkMode ? 'white' : ''
         }}

      >
         <Navbar />
         <Intro />
         <Services />
         <Experience />
         <Works />
         <Portfolio />
         <Contact />
         <Footer />
      </div>
   )
};


