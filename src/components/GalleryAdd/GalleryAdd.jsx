import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

function GalleryAdd({url, setUrl, title, setTitle, description, setDescription, getGallery}) {

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
        <div>
            <h2>Add to gallery</h2>
            <form onSubmit={submitForm}>
                <input
                    className="input"
                    type="text"
                    placeholder="URL"
                    value={url}
                    onChange={(evt) => setUrl(evt.target.value)}
                />
                <br />
                <input
                    className="input"
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={(evt) => setTitle(evt.target.value)}
                />
                <br />
                <input
                    className="input"
                    type="text"
                    placeholder="Description"
                    value={description}
                    onChange={(evt) => setDescription(evt.target.value)}
                />
                <br />
                <div>
                    <Button variant="contained" type="submit">Add to gallery</Button>
                </div>
            </form>
        </div>
    )
}

export default GalleryAdd;