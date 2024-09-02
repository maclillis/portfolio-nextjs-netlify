const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    console.log('Starting function execution');

    // Make sure your API token is correct and available
    const token = process.env.IPINFO_API_TOKEN || 'YOUR_API_TOKEN';
    console.log('Using token:', token);

    const response = await fetch(`https://ipinfo.io/json?token=${token}`);
    
    // Log the status code and check for a successful response
    console.log('Response status:', response.status);
    
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    
    const data = await response.json();
    console.log('Data received:', data);

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error('Error occurred:', error.message);
    console.error('Stack trace:', error.stack);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error', details: error.message }),
    };
  }
};