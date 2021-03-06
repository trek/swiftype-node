var assert = require('assert'),
    Swiftype = require('../lib/swiftype'),
    replay = require('replay')

describe('engines', function() {
  var apiKey = 'a-test-api-key',
      client = new Swiftype({ apiKey: apiKey })

  it('gets the engines', function(done) {
    client.engines.list(function(err, res) {
      assert(res)
      assert.equal(1, res.length)
      done()
    })
  })

  it('gets an engine', function(done) {
    var engine = 'my-engine'
    client.engines.get({engine: engine}, function(err, res) {
      assert(res)
      assert.equal(engine, res.slug)
      done()
    })
  })

  it('creates an engine', function(done) {
    var engine = { name: 'bookstore' }
    client.engines.create({engine: engine}, function(err, res) {
      assert(res)
      assert.equal(engine.name, res.name)
      done()
    })
  })

  it('destroys an engine', function(done) {
    var engine = 'bookstore'
    client.engines.destroy({
      engine: engine
    }, function(err, res) {
      assert(res)
      assert.equal(204, res.statusCode)
      done()
    })
  })
})
