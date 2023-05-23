module.exports = app => {
  const { router, controller } = app;
  // const checkLogin = app.middleware.checkLogin({});
  router.post('/user/create', controller.user.create);
};
