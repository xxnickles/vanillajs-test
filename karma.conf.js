// karma.conf.js
module.exports = function(config) {
    config.set({
      frameworks: ['mocha', 'chai'],
      browsers: ['Chrome'],
      files: [
        './scripts/*.js',
        './test/*.js'
      ],
  
      client: {
        mocha: {
          // change Karma's debug.html to the mocha web reporter
          reporter: 'html',
        }
      }
    });
  };