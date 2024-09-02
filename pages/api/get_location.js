export default async function handler(req, res) {
    const response = await fetch(`https://ipinfo.io/json?token=${process.env.IPINFO_API_TOKEN}`);
    const data = await response.json();

    console.log("response data: " + data);
  
    res.status(200).json({
      city: data.city,
      region: data.region,
      country: data.country,
    });
  }