var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FairSchema = new Schema({
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
  imageDescription: {
    type: String,
    default: ""
  },
  tags: [String],

  createdAt: {
    type: Date,
    default: Date.now()
  },

  location: {
    type: String,
    default: "",
  },

  startDate: Date,
  endDate: Date,

  category: {
      type: String,
      default: "Ogólny targ"
  }

  
});

const Article = mongoose.model('Fair', FairSchema);

module.exports = Article