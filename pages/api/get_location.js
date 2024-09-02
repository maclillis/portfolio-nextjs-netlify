export default async function handler(req, res) {
    const token = process.env.IPINFO_API_TOKEN;
  
    if (!token) {
      console.error('IPINFO_API_TOKEN is not set');
      return res.status(500).json({ error: 'API token is missing' });
    }
  
    try {
      const response = await fetch(`https://ipinfo.io/json?token=${token}`);
      const data = await response.json();
  
      if (response.ok) {
        res.status(200).json({
          city: data.city,
          region: data.region,
          country: data.country,
          ip: data.ip,
        });
      } else {
        console.error('Error fetching location data:', data);
        res.status(response.status).json({ error: 'Error fetching location data' });
      }
    } catch (error) {
      console.error('Error during fetch:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  }