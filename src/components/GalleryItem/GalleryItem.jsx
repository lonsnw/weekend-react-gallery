import React, { useState, useEffect } from 'react';

function GalleryItem ({image}) {
    // resource: https://medium.com/@amie.n.foster/flipping-out-how-to-create-a-card-that-flips-with-react-and-css-131dba54fc96
    const[flip, setFlip] = useState(false);

    return (
        <div data-testid="galleryItem" key={image.id} >
            <div data-testid="toggle" className={`card ${flip ? "flip" : ""}`}>
                <div className="front" onClick={() => setFlip(!flip)}>
                    <img src={image.url} className='front'></img>
                </div>
                <div className="back" onClick={() => setFlip(!flip)}>
                    <p className='back'>{image.description}</p>

                </div>
            </div>
            <h5>{image.likes}</h5>
        </div>
    )
};

export default GalleryItem;