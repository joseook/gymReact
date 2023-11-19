import { useEffect } from "react";
import Aos from 'aos'
import "../style/App.css";
import Header from "../components/Header/Header";
import Home from "../components/DSG/Home";
import Exercises from "../components/DSG/Exercises";
import Trainer from "../components/DSG/Trainer";
import Pricing from "../components/DSG/Pricing";
import Contact from "../components/DSG/Contact";
import Footer from "../components/DSG/Footer";

function App() {

  useEffect(() =>{
    Aos.init();
  },[])

  return <>
    <Header />
    <Home />
    <Exercises />
    <Trainer />
    <Pricing />
    <Contact />
    <Footer />
  </>
}

export default App