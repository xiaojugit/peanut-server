'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async list({ pageNum = 1, pageSize: limit = 10 }) {
    const offset = pageNum * limit - limit;
    return this.ctx.model.Org.findAndCountAll({
      offset,
      limit,
      order: [['createTime', 'desc']],
    });
  }

  async find(id) {
    const user = await this.ctx.model.Org.findByPk(id);
    if (!user) {
      this.ctx.throw(400, '用户不存在');
    }
    return user;
  }

  async findOneByUserName(uName) {
    const user = await this.ctx.model.Org.findOne({
      where: {
        username: uName,
      },
    });
    if (!user) {
      this.ctx.throw(400, '用户不存在');
    }
    return user;
  }

  async create(uName, password) {
    const { ctx } = this;
    const user = await ctx.model.Org.findOne({
      where: {
        username: uName,
      },
    });
    if (user) {
      this.ctx.throw(400, '用户已存在');
    }
    return ctx.model.Org.create({
      username: uName,
      password,
    });
  }

  async update({ id, updates }) {
    const user = await this.ctx.model.Org.findByPk(id);
    if (!user) {
      this.ctx.throw(400, '用户不存在');
    }
    return user.update(updates);
  }

  async del(id) {
    const user = await this.ctx.model.Org.findByPk(id);
    if (!user) {
      this.ctx.throw(400, '用户不存在');
    }
    return user.destroy();
  }
}

module.exports = UserService;
