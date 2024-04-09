import React, { useState, useEffect } from 'react';
import GalleryList from "../GalleryList/GalleryList.jsx";

function App() {
  let [images, setImages] = useState([]);

    return (
      <div>
        <header>
          <h1>Photo Gallery</h1>
        </header>
        <main>
          <GalleryList images={images} setImages={setImages} />
        </main>
        <footer>
          <p style={{fontSize:12}}>Please note: I did have the gallery image using an img tag before implementing MUI; see commit f565b7c.</p>
          <p style={{fontSize:10}}>I didn't read ahead enough to see that MUI was a stretch goal and should have been branched.  I know we're supposed to read the whole thing first... perhaps for this reason.  I will start including reading the stretch goals in that.</p>
        </footer>
      </div>
    );
}

export default App;
