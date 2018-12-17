const router = require("express").Router();
const apiKey = "9hCKvwaQl2sNmHInxGKzbzpZXCtOfxvtrxLPXfKhVfc9UZhIseffJZx586xlfpFgxMX31QwMbAkLp74ryzcxpUu5_-G8GvZbAeemncmHyrg4npAhSBGgqZU-IH_zW3Yx"
const yelp = require('yelp-fusion'); 
const client = yelp.client(apiKey);



router.get("/yelp/:zip", function (req, res){

    var yelpLocation = req.params.zip

    client.search({
      term:'veterinarian',
      location: yelpLocation,
      limit:6
    }).then(response => {
      res.json(response);
    }).catch(e => {
      console.log(e);
    })




})

module.exports = router;