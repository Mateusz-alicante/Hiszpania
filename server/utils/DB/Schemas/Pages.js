var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PageSchema = new Schema({
  title:  {
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
createdAt: {
    type: Date,
    default: Date.now()
  },
  url: {
      type: String,
      required: true,
      unique: true
  }
});

const Page = mongoose.model('Pages', PageSchema);

module.exports = Page