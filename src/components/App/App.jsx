import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from "../GalleryList/GalleryList.jsx";

function App() {
  let [image, setImages] = useState([]);

  useEffect(() => {
    getGallery()
  }, []);

  const getGallery = () => {
    axios.get('/api/gallery').then((response) => {
      console.log('Data:', response.data);
      setImages(response.data);
    }).catch((error) => {
      console.error(error);
      alert('There was an error loading the gallery.');
    });
  };

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
