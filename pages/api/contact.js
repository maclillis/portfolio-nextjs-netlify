import nodemailer from 'nodemailer';
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message, subject, recaptchaToken } = req.body;

    // Verify reCAPTCHA
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const recaptchaResponse = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `secret=${recaptchaSecret}&response=${recaptchaToken}`,
    });

    const recaptchaResult = await recaptchaResponse.json();

    if (!recaptchaResult.success || recaptchaResult.score < 0.5) {
      
      const slackMessage = {
          text: `:x: *reCAPTCHa-validering misslyckades för kontaktformuläret!* :rotating_light:\n\n\n*Namn:* ${name}\n*Email:* ${email}\n*Meddelande:*\n\n${message}`
      };

      await fetch(process.env.SLACK_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(slackMessage),
      });

      return res.status(400).json({ error: 'Valideringen misslyckades. Försök igen.' });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_SERVER,
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
    try {
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_TO_MAIL,
        subject: `Nytt meddelande från ${name} - ${subject}`,
        text: `${message}
              Email: ${email} 
              `,
        html: `<p>${message.replace(/\n/g, '<br>')}</p><p><strong> Email:</strong> ${email}</p>`,
      };
  
      //Let's send a notification to Slack
      const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
      await axios.post(slackWebhookUrl, {
          text: `:bell: *Pling! Nytt meddelande från kontaktformuläret!* :memo:`
      });

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Form submission failed:', error);

      // Send Slack error notification
      const slackWebhookUrl = process.env.SLACK_WEBHOOK_URL;
      await axios.post(slackWebhookUrl, {
          text: `:x: *Kontaktformuläret skickade inte!* :warning:\n\n*Error:* ${error.message}\n\n*Namn:* ${name}\n*Email:* ${email}\n*Meddelande:*\n\n${message}`
      });
      res.status(500).json({ error: 'Failed to submit the form. Please try again later.' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}