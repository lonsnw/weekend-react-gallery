import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItem from "../GalleryItem/GalleryItem.jsx";

function GalleryList ({images, setImages}) {

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
        <div data-testid="galleryList">
        {images.map((image) => {
          return <GalleryItem 
            key={image.id}
            image={image} 
            getGallery={getGallery} />
        })}
      </div>
    )
};

export default GalleryList;