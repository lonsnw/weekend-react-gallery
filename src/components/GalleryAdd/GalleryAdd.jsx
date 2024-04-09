import React, { useState } from 'react';
import axios from 'axios';


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
        })

    }
    return (
        <>
        
        </>
    )
}

export default GalleryAdd;