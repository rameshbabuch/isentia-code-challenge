const express = require('express')

class FeedController {
  static get (req, res, next) {
    res.json({title: 'respond with a resource'})
  }
}

const feedRoutes = express.Router()
feedRoutes.get('/', FeedController.get)

export default feedRoutes
