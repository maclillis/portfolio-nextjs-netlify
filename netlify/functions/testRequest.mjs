import fetch from 'node-fetch';

export async function handler(event, context) {
  try {
    console.log('Starting function execution');

    // Ensure your API token is correct and available
    const token = process.env.IPINFO_API_TOKEN || '18fc6c7555e891';
    console.log('Using token:', token);

    const response = await fetch("https://ipinfo.io/json?token=18fc6c7555e891");
    
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
}
