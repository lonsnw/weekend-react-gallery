import React, { useState, useEffect } from 'react';
import axios from 'axios';


function GalleryItem ({image, getGallery}) {
    // resource: https://medium.com/@amie.n.foster/flipping-out-how-to-create-a-card-that-flips-with-react-and-css-131dba54fc96
    const[flip, setFlip] = useState(true);

    const addLike = (imageId) => {
        axios.put(`/api/gallery/like/${imageId}`).then((response) => {
            getGallery();
        }).catch((error) => {
            console.error(error);
            alert('Something went wrong with adjusting likes!');
        });
    };

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
            <button onClick={() => addLike(image.id)}>Like</button>
            <h5>{image.likes}</h5>
        </div>
    )
};

export default GalleryItem;