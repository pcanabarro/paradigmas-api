const express = require('express');
const router = express.Router();
const EmailController = require('../controllers/emailController')

class Router {
  static getRouter() {
    router.post('/email', EmailController.sendEmail);

    return router;
  }
}

module.exports = Router
