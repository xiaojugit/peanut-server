'use strict';

const { Controller } = require('egg');

class UserController extends Controller {
  async index() {
    const { ctx, app } = this;
    const token = ctx.request.header.authorization;
    const result = await app.redis.get(token);

    if (!result) {
      ctx.throw(403, '获取用户信息失败');
    } else {
      ctx.body = {
        data: JSON.parse(result),
        message: '成功',
      };
    }
  }

  async create() {
    const { ctx } = this;
    const { username, password } = ctx.request.body;
    // const pwd = tools.sha1Encryption(tools.decode(password, config.crypto.key, config.crypto.iv), config.keys);
    const result = await ctx.service.user.create(username, password);

    if (!result) {
      ctx.throw(403, '获取用户信息失败');
    } else {
      ctx.body = {
        data: result,
        message: '成功',
        code: 200,
      };
    }
  }
}

module.exports = UserController;
