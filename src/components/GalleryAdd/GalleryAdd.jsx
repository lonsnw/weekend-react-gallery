import React, { useState } from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';

function GalleryAdd() {
    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');


    const addImage = ({getGallery}) => {
        axios.post('/api/gallery', { url: url, title: title, description: description}).then((response) => {
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
        <div className="add-div">
        <h2>Add to list</h2>
        <form onSubmit={submitForm}>
        <label className="label">
            Item:
        </label>
        <input
            className="input"
            type="text"
            placeholder="Item"
            value={url}
            onChange={(evt) => setUrl(evt.target.value)}
        />
        <br />
        <label className="label">
            Image URL:
        </label>
        <input
            className="input"
            type="text"
            placeholder="title"
            value={title}
            onChange={(evt) => setTitle(evt.target.value)}
        />
        <br />
        <label className="label">
            Unit:
        </label>
        <input
            className="input"
            type="text"
            placeholder="description"
            value={description}
            onChange={(evt) => setDescription(evt.target.value)}
        />
        <br />
        <div>
            <Button variant="contained" color="primary" type="submit" className="add-button">Add to list</Button>
        </div>
        </form>
    </div>
    )
}

export default GalleryAdd;