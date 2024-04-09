import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItem from "../GalleryItem/GalleryItem.jsx";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2

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
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid xs="auto">
                        {images.map((image) => {
                        return <GalleryItem 
                            key={image.id}
                            image={image} 
                            getGallery={getGallery} />
                        })}
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
};

export default GalleryList;