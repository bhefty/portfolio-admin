const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PostSchema = new Schema({
  slug: {
    type: String,
    unique: true,
    required: true
  },
  datePublished: { type: Date, default: Date.now },
  dateRevised: { type: Date, default: Date.now },
  title: { type: String },
  body: { type: String },
  heroImage: { type: String }
})

module.exports = mongoose.model('Post', PostSchema)
