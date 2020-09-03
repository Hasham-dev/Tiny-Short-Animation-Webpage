import React,{useEffect} from 'react';
import './App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Header from './Components/Header';
import Header2 from './Components/Header2';
import Content from './Components/Content';
import Footer from './Components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration:500,
      // delay:500,
      once: false, // whether animation should happen only once - while scrolling down

    });
    AOS.refresh();
  });
  return (
    <div>
      <Header />
      <Header2 />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
