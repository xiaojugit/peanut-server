'use strict';

module.exports = app => {
  app.beforeStart(async () => {
    console.log('app start!');
  });
};
