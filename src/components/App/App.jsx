import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryList from "../GalleryList/GalleryList.jsx";

function App() {
  let [images, setImages] = useState([]);

    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>
        <main>
          <GalleryList images={images} setImages={setImages} />
        </main>
      </div>
    );
}

export default App;
