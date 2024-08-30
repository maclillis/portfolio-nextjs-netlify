export default async function handler(req, res) {
    if (req.method === 'POST') {
      const { message } = req.body;
  
      // Your Slack webhook URL
      const slackWebhookUrl = process.env.SLACKBOT_WEBHOOK_URL;
  
      const payload = JSON.stringify({
        text: message || ":bell: Pling! Someone is currently visiting the portfolio.",
      });
  
      try {
        const response = await fetch(slackWebhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: payload,
        });
  
        if (response.ok) {
          res.status(200).json({ success: true });
        } else {
          res.status(response.status).json({ error: "Failed to send notification" });
        }
      } catch (error) {
        res.status(500).json({ error: "Server error" });
      }
    } else {
      res.status(405).json({ error: "Method not allowed" });
    }
  }