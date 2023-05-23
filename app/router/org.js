module.exports = app => {
  const { router, controller } = app;
  router.get('/org/page', controller.org.page);
};
