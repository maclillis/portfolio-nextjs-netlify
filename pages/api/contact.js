import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message, subject } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER,
      port: 465, // or 465 for secure
      secure: true, // true if port is 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO_MAIL,
      subject: `Nytt meddelande från ${name} - ${subject}`,
      text: subject + '<br>'+ message + '<br>Email: ' + email,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending email' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}