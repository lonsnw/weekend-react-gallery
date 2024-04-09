import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ThumbUpOffAltTwoToneIcon from '@mui/icons-material/ThumbUpOffAltTwoTone';

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
        <Card 
            variant="outlined"
            sx= {{ width: 250, height: 250 }} 
            data-testid="galleryItem" 
            key={image.id} >
            <CardActionArea data-testid="toggle" onClick={() => setFlip(!flip)}>
                {flip ? (
                <CardActionArea>
                    <CardMedia 
                        className="front"
                        component="img"
                        width="100"
                        height="150"
                        image={image.url}
                        alt={image.description}
                    />
                </CardActionArea>
                ) : (
                <CardActionArea>
                    <Typography
                        className="back"
                        width="100"
                        height="150">
                        {image.description}
                    </Typography>
                </CardActionArea>
                )}
            </CardActionArea>
            <IconButton aria-label="like this image" onClick={() => addLike(image.id)}><ThumbUpOffAltTwoToneIcon /></IconButton>
            <h5>{image.likes}</h5>
        </Card>
    )
};

export default GalleryItem;