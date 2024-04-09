import React, { useState, useEffect } from 'react';

function GalleryItem ({image}) {
    // resource: https://medium.com/@amie.n.foster/flipping-out-how-to-create-a-card-that-flips-with-react-and-css-131dba54fc96
    const[flip, setFlip] = useState(true);

    return (
        <div data-testid="galleryItem" key={image.id} >
            <div data-testid="toggle" onClick={() => setFlip(!flip)}>
                {flip ? (
                <div className="front" >
                    <img src={image.url} className='front'></img>
                </div>
                ) : (
                <div className="back" onClick={() => setFlip(!flip)}>
                    <p className='back'>{image.description}</p>
                </div>
                )}
            </div>
            <h5>{image.likes}</h5>
        </div>
    )
};

export default GalleryItem;