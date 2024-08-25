import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { namn, email, meddelande, typ } = req.body;
  
    // Basic validation
    if (!namn || !email || !meddelande || !typ) {
    return res.status(400).json({ error: 'All fields are required.' });
    }

    if (req.body.honey !== '') {
    return res.status(400).json({ error: 'Spam detected.' });
    }

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
        host: 'mailcluster.loopia.se',
        port: 587, // or 465 for secure
        secure: false, // true if port is 465
        auth: {
          user: 'hello@marcusliljehammar.se',
          pass: 'R7UURi8_cAw.W@mZiq',
        },
      });
  
      // Here you can add additional spam protection logic, such as:
      // - Check for honeypot fields
      // - Rate limiting by IP address
      // - Integrate with reCAPTCHA
      // - Use a third-party service like Akismet
  
      // Send email or save data to the database
      try {
        // Example: Send an email with Nodemailer
        // const transporter = nodemailer.createTransport(...);
        // await transporter.sendMail({
        //   from: email,
        //   to: 'your-email@example.com',
        //   subject: `New message from ${namn}`,
        //   text: message,
        // });

        await transporter.sendMail({
            from: email,
            to: 'hello@marcusliljehammar.se',
            subject: `Nytt meddelande från ${namn} - ${typ}`,
            text: message,
          });
  
        res.status(200).json({ meddelande: 'Message sent successfully!' });
      } catch (error) {
        res.status(500).json({ error: 'Failed to send message.' });
      }
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }