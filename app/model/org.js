'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Org = app.model.define('orgs', {
    id: {
      type: INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      field: 'id',
    },
    name: STRING(64),
    code: STRING(64),
    parentId: {
      type: INTEGER(11),
      field: 'parent_id',
    },
    parentName: {
      type: STRING(64),
      field: 'parent_name',
    },
    parentCode: {
      type: STRING(64),
      field: 'parent_code',
    },
    sort: INTEGER(11),
    description: STRING(1024),
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

  return Org;
};
