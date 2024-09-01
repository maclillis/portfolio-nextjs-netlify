import { useEffect, useState } from 'react';

function notifySlack(message) {
  fetch('/api/notify_slack', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ message }),
  })
  .then(response => response.json())
  .then(data => {
    if (data.success) {
      console.log('Notification sent to Slack.');
    } else {
      console.error('Error sending notification:', data.error);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function getDeviceInfo() {
  const userAgentData = navigator.userAgentData || {};
  const ua = navigator.userAgent;

  const platform = userAgentData.platform || navigator.platform || 'Unknown Platform';
  const brands = userAgentData.brands ? userAgentData.brands.map(b => b.brand).join(', ') : 'Unknown Browser';
  const mobile = userAgentData.mobile ? 'Mobile' : 'Desktop';
  const language = navigator.language;

  return `*Type:* ${mobile}, \n*Platform:* ${platform} , \n*Browser:* ${brands}, \n*Language:* ${language}, \n*User-Agent:* ${ua}`;
}

async function getLocationInfo() {
  try {
    const response = await fetch(`https://ipinfo.io/json?token=${process.env.IPINFO_API_TOKEN}`);
    const data = await response.json();
    return `Location: ${data.city}, ${data.region}, ${data.country}`;
  } catch (error) {
    console.error('Error fetching location data:', error);
    return 'Location: Unknown';
  }
}

function UserActivityMonitor() {
  const [locationInfo, setLocationInfo] = useState('');

  useEffect(() => {
    // Fetch location data once when the component is mounted
    getLocationInfo().then(info => {
      setLocationInfo(info);
    });

    const handleActivity = () => {
      const lastActive = sessionStorage.getItem('lastActiveTime');
      const now = Date.now();

      if (!lastActive || now - lastActive > 5 * 60 * 1000) { // 5 minutes
        const deviceInfo = getDeviceInfo();
        notifySlack(`:bell: *Pling!* Someone is visiting the portfolio\n---\n${deviceInfo}\n---\n${locationInfo}`);
        sessionStorage.setItem('lastActiveTime', now);
      }
    };

    document.addEventListener('mousemove', handleActivity);
    document.addEventListener('keydown', handleActivity);
    document.addEventListener('scroll', handleActivity);

    return () => {
      document.removeEventListener('mousemove', handleActivity);
      document.removeEventListener('keydown', handleActivity);
      document.removeEventListener('scroll', handleActivity);
    };
  }, [cookies.cookieConsent, locationInfo]);

  return null;
}

export default UserActivityMonitor;