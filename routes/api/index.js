const router = require('express').Router();

const lostFoundRoute = require('./lost');
// const foundRoute = require("./found")

router.use('/api', lostFoundRoute);

module.exports=router;