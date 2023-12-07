import batamSingh from "./batamsingh.jpg";
import Profile from "./Profile.js";
import Footer from "./Footer";
import './App.css'
import React from "react";

function App() {
  return (
    <div className="App">
        <div className="main-container">
          <img src={batamSingh} alt="batamsingh" className="my-photo" />
          <Profile />
          
          <Footer />
      
        </div>
    </div>
    
  );
}

export default App;
