/**
 * Main application routes
 */

'use strict';

var errors = require('./config/errors');

module.exports = function(app) {

  // Use component routing
  app.use('/api/things', require('./api/thing'));
  app.use('/api/authenticate', require('./api/authenticate'));
  app.use('/api/users', require('./api/user'));

  // All undefined asset or api routes should return a 404
  app.route('/:url(api|components|app|bower_components|assets)/*')
   .get(errors[404]);

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/index.html');
    });
};
