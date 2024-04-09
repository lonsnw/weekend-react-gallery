import GalleryItem from "../GalleryItem/GalleryItem.jsx";

function GalleryList ({images}) {
    return (
        <div data-testid="galleryList">
        {images.map((image) => {
          return <GalleryItem 
            key={image.id}
            image={image} />
        })}
      </div>
    )
};

export default GalleryList;