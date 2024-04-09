## Server-Side: ##

 * √ Implement the GET `/api/gallery` route so that it will send back the array of gallery item objects as its response. 
 * √ Implement the PUT `/api/gallery/like/:id` route so that it will increment a given gallery item's `likes` value by `1` and send back HTTP status code `200` as its response.

## Client-Side: ##

 * √ Create a `GalleryList` component that:
     * √ must have a `data-testid="galleryList"` attribute
     * √ When it loads, obtains the array of gallery item objects from GET `/api/gallery`, then stores it in a piece of React state.
     * √ In its `return` statement, `.map`s through the array of gallery item objects that are stored in React state to display each gallery item.
 * Create a `GalleryItem` component that:
     * √ Each `GalleryItem` must have a `data-testid="galleryItem"` attribute
     * √ Will be used to display a single gallery item and the title.
     * √ Expects to receive a single gallery item object as a prop. (These will be rendered inside the `GalleryList`'s `.map`.)
     * √ Toggles between showing the image and description on click. Use conditional rendering.
         * √ The element that a user clicks to toggle must have the `data-testid="toggle"` attribute.
         * √ A `GalleryItem`'s image must be an img tag.  
     * √ Displays a gallery item's current number likes.
     * √ Contains a "like" button that, when clicked, will fire off a PUT `/api/gallery/like/:id` request.
         * √ Like button must have an `data-testid="like"` attribute.