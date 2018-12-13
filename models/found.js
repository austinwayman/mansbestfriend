var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var FoundSchema = new Schema({
 
    name: {
        type: String,
        required: true
      },

      breed: {
        type: String,
        required: true
      },
    
      date : {
        type : Date,
        default: Date.now 
      },
      
      description: {
        type: String,
        // required: true
      },
      image: {
          type: String,
        //   required: true
      },
      contact: {
          type: String,
        //   required: true
      }
});


var Found = mongoose.model("Found", FoundSchema);


module.exports = Found;