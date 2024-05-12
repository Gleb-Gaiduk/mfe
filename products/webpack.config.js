const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  mode: 'development',
  devServer: {
    static: './dist',
    port: 8081,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Products',
      template: 'src/assets/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'products',
      filename: 'remoteEntry.js',
      exposes: {
        './ProductsIndex': './src/bootstrap',
      },
      shared: {
        ['@faker-js/faker']: {
          singleton: true,
        }
      },
    }),
  ],
}