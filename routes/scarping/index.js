const axios = require("axios");
const router = require("express").Router();
var cheerio = require("cheerio");



router.get("/petOwner/:index", function (req, res){

    var articleIndex = req.params.index

    var resultarr= []

    var articleArr = ["http://www.mypet.com/new-pet-owner.aspx", "http://www.mypet.com/basic-pet-care.aspx", "http://www.mypet.com/pet-nutrition.aspx", 
                    
    "http://www.mypet.com/pet-care-tips.aspx", "http://www.mypet.com/prevent-lost-pets.aspx"]
   
    axios.get(articleArr[articleIndex])
    .then( response => {
        
        var $ = cheerio.load(response.data)
        
        $(".eqHeight").each(function (i, element){
            var result = {}
            
            var image = "http://www.mypet.com/" + $(element).find("img").attr("src")
            var title = $(element).find("h3").text()
            var summary = $(element).find("p").remove("span").text()
            
            
            var link = "http://www.mypet.com/" + $(element).find("a").attr("href")
       
           

                result.image = image
                result.title = title
                result.summary = summary
                result.link = link
               
    
                resultarr.push(result)
            })
            
            res.json(resultarr)
        
        
    }).catch((err) => console.log(err))
    
    
    
    


})


router.post("/article" , function (req,res){


    axios.get(req.body.url)
    .then(response => {

        var articleObj = {}

        var $ = cheerio.load(response.data)

        var article = $(".section").html()
        var articleImage =  "http://www.mypet.com/" + $(".section").find("img").attr("src")

        articleObj.article = article
        articleObj.image = articleImage

        res.json(articleObj)


    })
})


module.exports = router;