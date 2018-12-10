var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Comment2Schema = new Schema({
 
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
      },

      comment3: [{
        type: Schema.Types.ObjectId,
        ref: "Comment3"
      }]

});


var Comment2 = mongoose.model("Comment2", Comment2Schema);


module.exports = Comment2;
