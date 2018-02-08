const router        = require('express').Router();
const Controller    = require('../controller/controller.js');

module.exports = (router) => {

    router.get('/url', Controller.getUrl);
    router.post('/get-token', Controller.getToken);
    router.get('/get-courses', Controller.getCourses);
    router.get('/get-announcements', Controller.getAnnouncements)
    return router;
}
