import FeedController from './controllers/FeedController'

export default class AppRoutes {
  static register (app) {
    app.use('/feeds', FeedController)
  }
}
