
import React from "react";
import Search from "./Search";
import '../styles/App.css';

const App = () => {
  return (
    <div className="App">
      <img 
        className="nasa-logo"
        src="https://cdn.cnn.com/cnnnext/dam/assets/200424060716-nasa-worm-logo.jpg"
        alt="nasaLogo"
      />
      <Search />
    </div>
  );
}

export default App;
   