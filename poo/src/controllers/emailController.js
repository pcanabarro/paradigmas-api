const nodemailer = require('nodemailer');

class EmailController {
  static async getInfo(req, res) {
    res.render('index')
  }

  static async sendEmail(req, res) {
    try {
      const { email, subject, body } = req.query
      console.log(email, subject, body)

      const transporter = nodemailer.createTransport({
        host: 'smtp.example.com',
        port: 587,
        secure: false,
        auth: {
          user: 'pedroh',
          pass: 'your-password',
        },
      });

      const mailOptions = {
        from: 'testmail@unilasalle.test',
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
