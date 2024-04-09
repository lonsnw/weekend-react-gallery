import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ThumbUpOffAltTwoToneIcon from '@mui/icons-material/ThumbUpOffAltTwoTone';
import Box from '@mui/material/Box';
import SentimentVeryDissatisfiedOutlinedIcon from '@mui/icons-material/SentimentVeryDissatisfiedOutlined';

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

    const deleteImage = (imageId) => {
        axios.delete(`/api/gallery/hate/${imageId}`).then((response) => {
            getGallery();
        }).catch((error) => {
            console.error(error);
            alert('Something went wrong deleting your image!');
        })
    }

    return (
        <Card 
            variant="outlined"
            sx= {{ width: 300, height: 300 }} 
            data-testid="galleryItem" 
            key={image.id} >
            <CardActionArea data-testid="toggle" onClick={() => setFlip(!flip)}>
                {flip ? (
                <CardActionArea>
                    <CardMedia 
                        className="front"
                        component="img"
                        width="250"
                        height="200"
                        image={image.url}
                        alt={image.description}
                    />
                </CardActionArea>
                ) : (
                <CardActionArea>
                    <Box
                    className="back"
                    height={148}
                    width={250}
                    my={1}
                    mx={1}
                    display="flex"
                    alignItems="center"
                    gap={0}
                    p={2}
                    sx={{ border: '2px solid grey' }}
                    >
                        {image.description}
                    </Box>
                </CardActionArea>
                )}
            </CardActionArea>
                    <Box
                    my={1}
                    mx={1}
                    display="flex"
                    alignItems="center"
                    gap={2}
                    p={2}>
                        {image.title}
                        <IconButton data-testid="like" aria-label="like this image" onClick={() => addLike(image.id)}><ThumbUpOffAltTwoToneIcon /></IconButton>
                        <h5>{image.likes}</h5>
                        <IconButton onClick={() => deleteImage(image.id)}> <SentimentVeryDissatisfiedOutlinedIcon /> </IconButton>
                    </Box>
        </Card>
    )
};

export default GalleryItem;