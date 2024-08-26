import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    console.log('Is POST!');

    const transporter = nodemailer.createTransport({
      host: 'mailcluster.loopia.se',
      port: 465, // or 465 for secure
      secure: true, // true if port is 465
      auth: {
        user: 'hello@marcusliljehammar.se',
        pass: 'R7UURi8_cAw.W@mZiq',
      },
    });

    const mailOptions = {
      from: email,
      to: 'hello@marcusliljehammar.se',
      subject: `Nytt meddelande från ${name}`,
      text: message,
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