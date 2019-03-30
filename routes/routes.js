const express = require('express');

const router = express.Router()

//index
router.get('/', (req, res) => {
    //res.render();
    console.log("Default Route");
    res.status(200).render("pages/index");
});

//about page
router.get('/about', (req, res) => {
    //res.render();
    console.log("About Route");
    res.status(200).render("pages/about");
});

//contact page
router.get('/contact', (req, res) => {
    //res.render();
    console.log("Contact Route");
    res.status(200).render("pages/contact");
});

//gallery
router.get('/gallery', (req, res) => {
    //res.render();
    console.log("Gallery Route");
    res.status(200).render("pages/gallery");
});

//All other routes this HAS to be final route
router.get('*', (req, res) => {
    res.status(404).render("error");
  });

module.exports = router;