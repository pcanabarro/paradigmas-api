const nodemailer = require('nodemailer');

class EmailController {
  static async sendEmail(req, res, next) {
    try {
      const { to, subject, text } = req.body;

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

      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: 'Email enviado com sucesso!' });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = EmailController
