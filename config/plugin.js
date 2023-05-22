'use strict';

/** @type Egg.EggPlugin */
module.exports = {
  // had enabled by egg
  // static: {
  //   enable: true,
  // },
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  sequelize: {
    enable: true,
    package: 'egg-sequelize',
  },
  // redis: {
  //   enable: true,
  //   package: 'egg-redis',
  // },
  // io: {
  //   enable: true,
  //   package: 'egg-socket.io',
  // },
  // validate: {
  //   enable: true,
  //   package: 'egg-validate',
  // },
};
