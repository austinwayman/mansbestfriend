const axios = require("axios");
const router = require("express").Router();
const mongoose = require("mongoose");
const db = require("../../models")

router.post("/lost", function(req, res) {

    db.Lost.create(req.body).then(function(result) {
        res.json(result)
    });
});

router.get("/lost", function(req,res) {
    db.Lost.find({})
    .then(function (result) {
        res.json(result)
    });
});

router.post("/found", function(req, res) {
    db.Found.create("/found", function(req, res) {
        res.json(result)
    });
});

router.get("/found", function(req,res) {
    db.Found.find({}).populate()
    .then(function (result) {
        res.json(result)
    });
});

module.exports = router;