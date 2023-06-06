const express = require('express')
const nodemailer = require('nodemailer')

const app = express()
app.set('view engine', 'pug')
app.set('views', 'views')

app.get('/email', (req, res) => {
  res.render('index')
})

app.get('/data', (req, res) => {
  const { email, subject, body } = req.query
  console.log(email, subject, body)

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'pcanabarro.adp@gmail.com',
      pass: '',
    },
  })

  const mailOptions = {
    from: 'pcanabarro.adp@gmail.com',
    to: email,
    subject: subject,
    text: body,
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Erro no envio do email:', error)
      res.status(500).json({ error: 'Falha no envio do email' })
    } else {
      console.log('Email enviado:', info.response)
      res.status(200).json({ message: 'Email enviado com sucesso' })
    }
  })
})

app.listen(3000, () => {
  console.log('Server Estruturado rodando na porta 3000')
})
