const express = require('express');
const router = express.Router();
const EmailController = require('../controllers/emailController')

class Router {
  static getRouter() {
    router.get('/', EmailController.sendEmail);

    return router;
  }
}

module.exports = Router
