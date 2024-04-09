import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function GalleryAdd({theme, ThemeProvider, url, setUrl, title, setTitle, description, setDescription, getGallery}) {

    const addImage = () => {
        axios.post('/api/gallery', { url: url, title: title, description: description }).then((response) => {
            // clear inputs
            setUrl('');
            setTitle('');
            setDescription('');
            getGallery()
        }).catch((error) => {
            console.error(error);
            alert('Error adding your image');
        })
    }

    const submitForm = (e) => {
        e.preventDefault();
        addImage();
    }

    return (
        <ThemeProvider theme={theme}> 
        <Box 
        width="75%"
        margin="auto"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        >
            <h2>Add to gallery</h2>
            <form onSubmit={submitForm}>
                <TextField
                fullWidth
                id="filled-required"
                label="URL"
                value={url}
                onChange={(evt) => setUrl(evt.target.value)}
                variant="filled"
                />
                <TextField
                fullWidth
                id="filled-required"
                label="Title"
                value={title}
                onChange={(evt) => setTitle(evt.target.value)}
                variant="filled"
                />
                <TextField
                fullWidth
                id="filled-required"
                label="Description"
                value={description}
                onChange={(evt) => setDescription(evt.target.value)}
                variant="filled"
                />
                <Box
                    margin="auto"
                    padding={1}
                    display="flex"
                    flexDirection="row"
                    justifyContent="center">
                    <Button variant="contained" type="submit" color="secondary">Add to gallery</Button>
                </Box>
            </form>
        </Box>
        </ThemeProvider>
    )
}

export default GalleryAdd;