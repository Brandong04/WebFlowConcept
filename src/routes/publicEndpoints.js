/* Importing Required Dependencies */
const express = require('express');
const path = require('path')

/* Creating Router */
const router = express.Router();

/* Using CSS Styles */
router.use('/assets', express.static(path.join(__dirname, '../assets')))

/* 
Rendering HTML/CSS For Landing Page
URL: http://localhost:3000/
*/
router.get('/', (request, response) => {
    response.sendFile('home.html', { root: `${__dirname}/../views`})
});

/* 
Rendering HTML/CSS For Contact Page
URL: http://localhost:3000/contact
*/
router.get('/contact', (request, response) => {
    response.sendFile('contact.html', { root: `${__dirname}/../views`})
});

/* Exporting Router to be used in server.js */
module.exports = router;