const express = require('express')
const router = express.Router()
const Post = require('../models/post')

/**
 * Slug generation based on:
 * https://gist.github.com/mathewbyrne/1280286#gistcomment-1654133
 */
const slugify = (text) => {
  const d = new Date()
  const year = d.getFullYear().toString().substr(-2)
  const month = d.getMonth() + 1
  const date = d.getDate()

  return text.toString().toLowerCase().trim()
  .replace(/&/g, '-and-')         // Replace & with 'and'
  .replace(/[\s\W-]+/g, '-')      // Replace spaces, non-word characters and dashes with a single dash (-)
  .concat(`-${year}${month}${date}`)
}

// GET /posts/:slug to retrieve post
router.get('/:slug', (req, res) => {
  Post.find({ slug: req.params.slug }, (err, post) => {
    if (err) res.send(err)
    res.json(post[0])
  })
})

// PUT /posts/new to add new post
router.put('/new', (req, res) => {
  const {
    title,
    body,
    heroImage
  } = req.body

  const slug = slugify(title)

  // Verify another post doesn't have the same slug
  Post.findOne({ slug: slug }, (err, existingPost) => {
    if (err) res.send(err)
    if (!existingPost) {
      const addNewPost = new Post({
        slug,
        title,
        body,
        heroImage
      })

      Post.create(addNewPost, (err) => {
        if (err) {
          res.send(err)
        } else {
          res.json({ msg: 'New post added successfully' })
        }
      })
    } else {
      res.json({ msg: 'Post with this slug already exists. Try changing the title.' })
    }
  })
})

module.exports = router
