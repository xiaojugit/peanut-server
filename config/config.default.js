/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = (exports = {});

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    // 用户名
    user: 'root',
    // 密码
    password: 'xiao@123',
    // 数据库名
    database: 'peanut',
    dialectOptions: {
      useUTC: false, // for reading from database
    },
    define: {
      createdAt: 'createTime',
      updatedAt: 'updateTime',
      // timestamps: false, // 自动维护时间戳 [ created_at, updated_at ]
      // 禁止修改表名，默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数
      // 但是为了安全着想，复数的转换可能会发生变化，所以禁止该行为
      freezeTableName: true,
    },
    timezone: '+08:00',
  };

  exports.view = {
    defaultViewEngine: 'nunjucks',
    mapping: {
      '.html': 'nunjucks',
    },
  };

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1684553024503_4235';

  // add your middleware config here
  config.middleware = [];

  config.security = {
    csrf: {
      ignore: [/\/api/, /\/admin/, '/login', '/user/create'],
    },
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
    domain: '//127.0.0.1:7000',
  };

  return {
    ...config,
    ...userConfig,
  };
};
