function GalleryItem ({image}) {
    return (
        <div data-testid="galleryItem" key={image.id}>
            <img src={image.url}></img>
            <p>{image.description}</p>
            <h5>{image.likes}</h5>
        </div>
    )
};

export default GalleryItem;