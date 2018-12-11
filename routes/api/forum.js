const axios = require("axios");
const router = require("express").Router();
const mongoose = require("mongoose");
const db = require("../../models")



router.get("/threads", function (req, res) {
    db.Post.find({}).populate(

        {
            path: "comment", populate: { path: "comment2", populate: { path: "comment3" } }

        }


    ).then(function (result) {
        res.json(result)
    })
})

router.post("/threads", function (req, res) {
    db.Post.create(req.body).then(function (result) {
        res.json(result)
    })
})





router.post("/Comment1/:id", function (req, res) {


    db.Comment.create(req.body)
        .then(function (dbComment) {

            return db.Post.findOneAndUpdate({ _id: req.params.id }, { $push: { comment: dbComment._id } }, { new: true });

        })
        .then(function (result) {

            console.log("working")
        })

});

router.post("/Comment2/:id", function (req, res) {


    db.Comment2.create(req.body)
        .then(function (dbComment) {

            return db.Comment.findOneAndUpdate({ _id: req.params.id }, { $push: { comment2: dbComment._id } }, { new: true });

        })
        .then(function (result) {

            console.log("working")
        })

});

router.post("/Comment3/:id", function (req, res) {


    db.Comment3.create(req.body)
        .then(function (dbComment) {

            return db.Comment2.findOneAndUpdate({ _id: req.params.id }, { $push: { comment3: dbComment._id } }, { new: true });

        })
        .then(function (result) {

            console.log("working")
        })

});


module.exports = router;