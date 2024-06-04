# PHOTO GALLERY

## Description

_Duration: 1 Week Sprint_

This is an application that allows the user to create an image gallery.  Users can:

 * Add images to the gallery with titles and descriptions
 * "Like" the images
 * Click on the images to see their descriptions
 * Delete the images by clicking the sad/dead emoji

The app stores all images, titles, descriptions, and like counts on a database until they are deleted.  Documentation provides sample content for the database, including images that are housed in the public folder of this repo.  Additional images must be added using URLs, as image uploading is not available at this time..

This app is not currently deployed.  It was built in response to this assignment: [Assignment Instructions](./INSTRUCTIONS.md).

## Screen Shot

Gallery with provided content loaded:
<br />
<center><image src=public/images/on-load.png width=80%></center>
<br />
When entering a new image:
<br />
<center><image src=public/images/add-image.png width=80%></center>
<br />
With images flipped to show descriptions:
<br />
<center><image src=public/images/flip-cards.png width=80%></center>
<br />

## Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)
- [Material UI](https://mui.com/)

## Installation

The application has been tested and run on a local machine using the browser. It may be deployed in the future but currently is only available locally.

1. Clone down a version of this repository
2. Create a database named `react-gallery`
3. Create and populate a table called `gallery`  
    - This project is built on [Postgres](https://www.postgresql.org/download/), which you will need to install to use the app
    - The `database.sql` file contained in this repository provides all of the necessary queries for creating the table needed to run the app
    - The queries will also populate the `gallery` table with sample data
4. Open in your editor of choice and run an `npm install`
5. Run `npm run server` in your terminal
6. Run `npm run client` in your terminal
7. Navigate to the localhost port provided by your terminal when you initiate your client.  The default port when running Vite, for example, is `http://localhost:5173/`

## Usage
I've got a lot of photos that I'd like to show my friends and let them vote on them.  My friends are pretty opinionated and I have a backup of all of these images, so I also want to allow them to delete any images that they really don't like.  They can also add their own images that they're hosting online or that they've found on other websites.

1. Follow the installation instructions above
2. Add any additional images by using the input fields at the top of the page
3. Select `Add to gallery` to add the new image to the gallery and re-sort the images in alphabetical order by title
4. Vote on images by using the like button, which is a thumb's up icon
5. To see the description of the image, click on the image to flip it to the description
6. Click the description to flip the image back
7. Delete an image by clicking the sad/dead emoji icon

## Technologies

- PostgreSQL
- Express
- React
- Node
- Material UI

## Documentation
This documentation was built following a [provided template](https://github.com/PrimeAcademy/readme-template/blob/main/README.md).   It has been edited for style,  consistency, and to provide all relevant details.

## Support
If you have suggestions or issues, please contact me.
