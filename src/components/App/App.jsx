import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from "../GalleryList/GalleryList.jsx";

function App() {
  let [images, setImages] = useState([]);

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
        <main>
          <GalleryList images={images} />
        </main>
      </div>
    );
}

export default App;
