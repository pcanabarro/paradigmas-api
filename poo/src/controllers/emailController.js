const nodemailer = require('nodemailer');
require('dotenv').config({path: '../.env'})

class EmailController {
  static async getInfo(req, res) {
    res.render('index')
  }

  static async sendEmail(req, res) {
    try {
      const { email, subject, body } = req.query
      console.log(email, subject, body)

      const transporter = nodemailer.createTransport({
        service: "outlook",
        auth: {
          user: 'pedroh.canabarro@hotmail.com',
          pass: process.env.PASSWORD,
        }
      });

      const mailOptions = {
        from: 'pedroh.canabarro@hotmail.com',
        to: email,
        subject: subject,
        text: body,
      };

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email enviado com sucesso!' });
    } catch (error) {
      res.status(500).json({ msg: 'Erro no envio do email', error: error })
    }
  }
}

module.exports = EmailController
