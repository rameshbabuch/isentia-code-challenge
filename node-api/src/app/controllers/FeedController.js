import express from 'express';
import axios from 'axios';
import config from '../config';

/**
 * Feed Controller
 *
 */
class FeedController {
  /**
   * Get feeds from Flickr public API
   * @param req
   * @param res
   * @param next
   */
  static async get (req, res, next) {

    // callback function for flicker response
    function jsonFlickrFeed (data) {
      // console.log('data', data)
      res.json({status: true, message: 'public feeds fetched', data});
    }

    try {
      // get feed url with params
      const url = FeedController.getFeedUrl(req.query);
      const response = await axios.get(url);
      // eval the response since flickr json is a javascript code
      eval(response.data);
    } catch (err) {
      // any errors throw error response
      res.json({status: false, message: 'could not fetch feeds', error: err.message});
    }
  }

  /**
   * Get Feed URL with query params
   * @param query
   * @return {string}
   */
  static getFeedUrl(query){
    // get api url from config.json
    let url = config.flickrPublicAPI;
    let params = 'format=json';

    // check query exists
    if (query) {
      params += `&tags=${query.tags}`;
    }

    return `${url}?${params}`;
  }
}

// declare express routes
// attach callback functions from the class
const feedRoutes = express.Router();
feedRoutes.get('/', FeedController.get);

export default feedRoutes;
export {
  FeedController
}
