// const yelp = require("yelp-fusion")


// const APIKEY = "rLvrq1dI9uBc3ycawxYDcJVDJV6mUIRKfZBqYA1srXg-VHxomBBANBFXKPJ6dpi6q1w9W1-IN31EGDlh-NqyY1t1WgpObaTOhvhR0lXG722lJCqg81o0N5eYN94KXHYx";

// export default

const axios = require("axios");
const router = require("express").Router();
const mongoose = require("mongoose");
const db = require("../../models")

router.post("/lostanimals", function(req, res) {
    db.Post.create(req.body).then(function (result) {
        res.json(result)
    })
})