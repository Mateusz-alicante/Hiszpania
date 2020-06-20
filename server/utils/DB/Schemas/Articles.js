var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title:  {
      type: String,
      required: true,
      minlength: 3
  },
  subtitle: {
    type: String,
    required: true,
    minlength: 3
},
  author: {
    type: String,
    required: true,
    minlength: 3
},
  body:   {
    type: String,
    required: true,
    minlength: 3
},
  image: {
    type: String,
    required: true
},
  tags: [String],
  createdAt: {
    type: Date,
    default: Date.now()
  }
  
});

const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article