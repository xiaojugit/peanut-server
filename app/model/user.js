'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const User = app.model.define('user', {
    id: {
      type: INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    username: {
      type: STRING(64),
      field: 'username',
    },
    password: {
      type: STRING(64),
      field: 'password',
    },
    name: {
      type: STRING(64),
      field: 'name',
    },
    cardId: {
      type: STRING(30),
      field: 'card_id',
    },
    gender: {
      type: STRING(2),
      field: 'gender',
    },
    birthday: {
      type: DATE,
      field: 'birthday',
    },
    mobile: {
      type: STRING(20),
      field: 'mobile',
    },
    avatar: {
      type: STRING(255),
      field: 'avatar',
    },
    lastLoginTime: {
      type: DATE,
      field: 'last_login_time',
    },
    lastLoginIp: {
      type: STRING(63),
      field: 'last_login_ip',
    },
    status: {
      type: INTEGER(2),
      field: 'status',
    },
    createTime: {
      type: DATE,
      field: 'create_time',
    },
    updateTime: {
      type: DATE,
      field: 'update_time',
    },
    deleted: {
      type: DATE,
      field: 'deleted',
    },
  }, {
    timestamps: false, // 自动维护时间戳 [ created_at、updated_at ]
    // 禁止修改表名，默认情况下，sequelize将自动将所有传递的模型名称（define的第一个参数）转换为复数
    // 但是为了安全着想，复数的转换可能会发生变化，所以禁止该行为
    freezeTableName: true,
  }
  );

  return User;
};
