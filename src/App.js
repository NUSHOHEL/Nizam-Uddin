import React from "react"
import HeaderMain from "./component/HeaderMain/HeaderMain";
import './App.css'

// import { CssBaseline } from "@material-ui/core";
import Navbar from "./component/NavBar/Navbar";
import About from "./component/About/About";
import Project from "./component/Project/Project";
import Blog from "./component/Blog/Blog";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";

function App() {
  return (
    <div >
     
     
      <HeaderMain/>
      <Navbar/>
      <About/>
      <Project/>
      <Blog/>
      <Contact/>
      <Footer/>
    
    </div>
  );
}

export default App;
