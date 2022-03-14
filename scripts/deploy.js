// eslint-disable-next-line import/no-extraneous-dependencies
const ghpages = require('gh-pages');
const { DEPLOY_PATH } = require('./constants');

ghpages.publish(DEPLOY_PATH, {}, console.log);
