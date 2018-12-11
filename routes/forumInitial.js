const axios = require("axios");
const router = require("express").Router();
const mongoose = require("mongoose");
const db = require("../models")

router.get("/forum/:animal", function (req, res){

    var pet = req.params.animal

    db.Post.find({animal : pet, category: "Health and Nutrition"}).populate(

        {
            path: "comment", populate: { path: "comment2", populate: { path: "comment3" } }

        }
    ).then(function (result) {
        res.json(result)
    })



})


router.get("/forum/:animal/:category", function (req, res){

    var pet = req.params.animal
    var cate = req.params.category


    db.Post.find({animal : pet, category: cate}).populate(

        {
            path: "comment", populate: { path: "comment2", populate: { path: "comment3" } }

        }
    ).then(function (result) {
        res.json(result)
    })



})

router.get("/thisPost/:id", function (req, res) {

    db.Post.findById(req.params.id).populate(

        {
            path: "comment", populate: { path: "comment2", populate: { path: "comment3" } }

        }
    ).then(function (result){
        res.json(result)
    })
})

module.exports = router;