'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/servers', controller.manager.getServers);
  router.get('/manager/all_status', controller.manager.getAllStatus);
  router.post('/manager/deploy', controller.manager.deploy);
};
