import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import './Components/Slider';
import './Components/NavBar';
import NavBar from './Components/NavBar';
import Slider from './Components/Slider';
import Statistics from './Components/Statistics';
import Footer from './Components/Footer';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
function App() {
  const [darkMode, setDarkMode] = useState(false);
  let slides = [
    "https://i.pinimg.com/originals/51/82/ac/5182ac536727d576c78a9320ac62de30.jpg",
    "https://wallpapercave.com/wp/wp3386769.jpg",
    "https://wallpaperaccess.com/full/809523.jpg",
    "https://getwallpapers.com/wallpaper/full/5/c/0/606489.jpg",
  ];
  return (
    <div className="App">
      <div className= {`${darkMode && "dark"}`}>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode}  />
      <Slider slides={slides} />     
      <Statistics/>
      <Skills/>
      <Contact/>
      <Footer/>
      </div>
    </div>
  );
}

export default App;
