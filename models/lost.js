var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var LostSchema = new Schema({
 
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


var Lost = mongoose.model("Lost", LostSchema);


module.exports = Lost;