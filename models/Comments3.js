var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Comment3Schema = new Schema({
 
    name: {
        type: String,
        required: true
      },
    
      date : {
        type : Date,
        default: Date.now 
      },
      
      comment: {
        type: String,
        required: true
      }

});


var Comment3 = mongoose.model("Comment3", Comment3Schema);


module.exports = Comment3;
