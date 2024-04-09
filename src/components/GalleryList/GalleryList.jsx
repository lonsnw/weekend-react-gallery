import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItem from "../GalleryItem/GalleryItem.jsx";
import ImageList from '@mui/material/ImageList';

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
            <ImageList sx={{ flexGrow: 1 }} cols={3}>
                {images.map((image) => {
                    return <GalleryItem 
                        key={image.id}
                        image={image} 
                        getGallery={getGallery} />
                    })}
            </ImageList>
        </div>
    )
};

export default GalleryList;