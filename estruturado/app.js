const express = require('express')
const nodemailer = require('nodemailer')
require('dotenv').config()

const app = express()
app.set('view engine', 'pug')
app.set('views', 'views')

app.get('/email', (req, res) => {
  res.render('index')
})

app.get('/data', async (req, res) => {
  const { email, subject, body } = req.query
  console.log(email, subject, body)

  const transporter = nodemailer.createTransport({
    service: "outlook",
    auth: {
      user: 'pedroh.canabarro@hotmail.com',
      pass: process.env.PASSWORD
    }
  })

  const mailOptions = {
    from: 'pedroh.canabarro@hotmail.com',
    to: email,
    subject: subject,
    text: body,
  }

  await transporter.sendMail(mailOptions, (error, info) => {
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
