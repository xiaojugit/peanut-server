'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('users', {
    id: {
      type: INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    username: STRING(64),
    password: STRING(64),
    name: STRING(64),
    cardId: {
      type: STRING(64),
      field: 'card_id',
    },
    gender: INTEGER(2),
    birthday: DATE,
    mobile: STRING(20),
    avatar: STRING(255),
    profile: STRING(1024),
    lastLoginTime: {
      type: DATE,
      field: 'last_login_time',
    },
    lastLoginIp: {
      type: STRING(63),
      field: 'last_login_ip',
    },
    status: INTEGER(2),
    createTime: {
      type: DATE,
      field: 'create_time',
    },
    updateTime: {
      type: DATE,
      field: 'update_time',
    },
    deleted: INTEGER(1),
  }, {
    // createdAt: 'createTime',
    // updatedAt: 'updateTime',
    // timestamps: false, // 自动维护时间戳 [ created_at, updated_at ]
    // 禁止修改表名，默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数
    // 但是为了安全着想，复数的转换可能会发生变化，所以禁止该行为
    // freezeTableName: true,
  }
  );

  return User;
};
