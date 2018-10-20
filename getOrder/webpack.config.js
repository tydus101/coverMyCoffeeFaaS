var path = require('path');
module.exports = {
  entry: './getOrder.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  target: 'node'
};