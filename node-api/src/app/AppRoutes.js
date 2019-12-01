import feedRoutes from './controllers/FeedController'

/**
 * App routes registry
 *
 */
export default class AppRoutes {

  /*
   * Register all the controller routes here
   */
  static register (app) {
    app.use('/feeds', feedRoutes)
  }

}
