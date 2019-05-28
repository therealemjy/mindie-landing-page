/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}
const path = require('path');
const webpack = require('webpack');

// Enable absolute paths imports
exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    plugins: [
      // pass through the `ENV` env variable
      new webpack.EnvironmentPlugin('ENV'),
    ],
  });
};

// Change default home page
// exports.onCreatePage = ({ page, actions }) => {
//   const { deletePage, createPage } = actions;

//   page.matchPath = '/*';

//   createPage(page);
// };
