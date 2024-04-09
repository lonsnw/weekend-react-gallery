import React, { useState, useEffect } from 'react';
import axios from 'axios';
import GalleryItem from "../GalleryItem/GalleryItem.jsx";
import ImageList from '@mui/material/ImageList';

function GalleryList ({theme, ThemeProvider, images, setImages, getGallery}) {

    return (
        <ThemeProvider theme={theme}> 
        <div data-testid="galleryList">
            <ImageList sx={{ flexGrow: 1, margin:"20px"
 }} cols={3}>
                {images.map((image) => {
                    return <GalleryItem 
                        key={image.id}
                        image={image} 
                        getGallery={getGallery}
                        theme={theme} 
                        ThemeProvider={ThemeProvider} />
                    })}
            </ImageList>
        </div>
        </ThemeProvider>
    )
};

export default GalleryList;