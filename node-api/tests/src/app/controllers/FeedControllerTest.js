// Import the dependencies for testing
import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../../../../src/app/main'
import { FeedController } from '../../../../src/app/controllers/FeedController'
import config from '../../../../src/app/config.json'

// Configure chai
chai.use(chaiHttp)
chai.should()
describe('Feed API', () => {
  describe('GET /feeds', () => {

    // Test to get all feeds record
    it('should get all feeds record', (done) => {
      chai.request(app)
        .get('/feeds')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.a('object')
          done()
        })
    })
  })
})

describe('Feed Controller', () => {

  // Test to Feed controller - method getFeedUrl() - without query string
  it('should get only API URL', () => {
    const url = FeedController.getFeedUrl()
    url.should.equal(`${config.flickrPublicAPI}?format=json`)
  })

  // Test to Feed controller - method getFeedUrl() - with query string
  it('should get API URL with query string', () => {
    const url = FeedController.getFeedUrl({tags: 'apple,bat'})
    url.should.equal(`${config.flickrPublicAPI}?format=json&tags=apple,bat`)
  })

})
