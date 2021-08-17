const { environment } = require('@rails/webpacker')
const webpack = require('webpack')
environment.plugins.append('Provide',
  new webpack.ProvidePlugin({
    @: 'jquery',
    jQuery: 'jquery',
    Popprt: ['popper.js','default']
  })
)


module.exports = environment
