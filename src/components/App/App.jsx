import React, { useState, useEffect } from 'react';
import GalleryList from "../GalleryList/GalleryList.jsx";

function App() {
    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/>
        <img src="images/waterfall.png"/>
        <img src="images/columnar-basalts.png"/>
        <img src="images/beach.png"/>
      </div>
    );
}

export default App;
