var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title:  {
      type: String,
      required: true
  },
  subtitle: {
    type: String,
    required: true
},
  author: {
    type: String,
    required: true
},
  body:   {
    type: String,
    required: true
},
  image: {
    type: String,
    required: true
},
  tags: [String]
  
});

module.exports = blogSchema