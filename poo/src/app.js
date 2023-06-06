const express = require('express');
const path = require('path');

class App {
  constructor() {
    this.app = express();
    this.port = 3000;
    this.app.use(express.json());
    this.app.use(express.static(path.join(__dirname, 'public')));
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }

  errorHandler(err, req, res, next) {
    console.error(err.stack);
    res.status(500).json({ error: 'Ocorreu algo de errado' });
  }
}

const app = new App();
app.start();
