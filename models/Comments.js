var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema({
 
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

      comment2: [{
        type: Schema.Types.ObjectId,
        ref: "Comment2"
      }]
});


var Comment = mongoose.model("Comment", CommentSchema);


module.exports = Comment;
