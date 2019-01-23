const functions = require('firebase-functions');
const helmet  = require('helmet');
const shrinkRay = require('shrink-ray');
const { join } = require('path');
const express = require('express');


const configureProduction = (app) => {
  const clientStats = require('./assets/stats.json');
  const serverRender = require('./assets/app.server.js').default;
  const publicPath = '/';
  const outputPath = join(__dirname, 'assets');
  
  app.use(publicPath, express.static(outputPath));
  app.use(serverRender({
    clientStats,
    outputPath,
  }));
};
const app = express();
app.use(helmet());
app.use(shrinkRay({
  filter: () => true,
}));
configureProduction(app);
exports.app = functions.https.onRequest(app);
