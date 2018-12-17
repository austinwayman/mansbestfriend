const router = require('express').Router();

const lostFoundRoute = require('./lost');
const forum = require("./forum")
const yelp = require("./yelp")

// const foundRoute = require("./found")

router.use('/api', lostFoundRoute);
router.use('/api', forum)
router.use('/api', yelp)


module.exports =router;