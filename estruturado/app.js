const express = require('express');
const nodemailer = require('nodemailer');
const dataFromFront = require('./inputs')

const app = express();
app.use(express.json());
app.use(express.static('public'))

app.post('/email', (req, res) => {
  console.log(dataFromFront)
  const { to, subject, text } = dataFromFront;

  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    secure: false,
    auth: {
      user: 'your-email@example.com',
      pass: 'your-password',
    },
  });

  const mailOptions = {
    from: 'testmail@unilasalle.test',
    to,
    subject,
    text,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro no envio do email:', error);
      res.status(500).json({ error: 'Falha no envio do email' });
    } else {
      console.log('Email enviado:', info.response);
      res.status(200).json({ message: 'Email enviado com sucesso' });
    }
  });
});

app.listen(3000, () => {
  console.log('Server Estruturado rodando na porta 3000');
});
