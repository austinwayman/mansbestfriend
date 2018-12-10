var mongoose = require("mongoose");


var Schema = mongoose.Schema;


var PostSchema = new Schema({

  title: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  animal: {
    type: String,
    required: true
  },

  date : {
    type : Date,
    default: Date.now 
  },
  
  content: {
    type: String,
    required: true
  },

  comment: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
});

var Post = mongoose.model("Post", PostSchema);


module.exports = Post;
