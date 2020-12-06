const path = require('path');

module.exports = {
    devServer: {
      proxy: {
        'api': {
          target: 'http://localhost:5000' // enter dev server url here'
        }
      }
    }
}