const express = require('express');
const EmailController = require('../controllers/emailController')

class Router {
  static getRouter() {
    const router = express.Router();
    router.get('/', (req, res) => res.send('Hello'))
    router.get('/email', EmailController.getInfo);
    router.get('/data', EmailController.sendEmail);

    return router;
  }
}

module.exports = Router
