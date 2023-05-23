'use strict';

const { Controller } = require('egg');

class UserController extends Controller {


  async page() {
    const { ctx } = this;
    const { pageSize = 20, pageNum = 1 } = ctx.request.body;
    const result = await ctx.service.org.list({ pageSize, pageNum });

    if (!result) {
      ctx.throw(403, '获取失败');
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
