const express = require('express');
const Router = require('./routes/router.js')

class App {
  constructor() {
    this.app = express();
    this.port = 3000;
    this.app.set('view engine', 'pug')
    this.app.set('views', 'views')
    this.app.use(express.json());
    this.app.use(Router.getRouter())
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server POO rodando na porta ${this.port}`);
    });
  }

  errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: 'Ocorreu algo de errado' });
  }
}

const app = new App();
app.start();
