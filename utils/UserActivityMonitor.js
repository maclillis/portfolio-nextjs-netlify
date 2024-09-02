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
    } else {
      //console.error('Error sending notification:', data.error);
    }
  })
  .catch(error => {
    //console.error('Error:', error);
  });
}

async function getDeviceAndLocationInfo() {
  const userAgentData = navigator.userAgentData || {};
  const ua = navigator.userAgent;

  let platform = 'Unknown Platform';
  let brands = 'Unknown Browser';
  let mobile = 'Desktop';
  
  if (userAgentData.platform) {
    platform = userAgentData.platform;
  } else if (navigator.platform) {
    platform = navigator.platform;
  }

  if (userAgentData.brands) {
    brands = userAgentData.brands.map(b => b.brand).join(', ');
  } else {
    // Fallback to userAgent parsing
    if (ua.includes('Safari') && !ua.includes('Chrome')) {
      brands = 'Safari';
    } else if (ua.includes('Chrome')) {
      brands = 'Chrome';
    } else if (ua.includes('Firefox')) {
      brands = 'Firefox';
    } else if (ua.includes('Edg')) {
      brands = 'Edge';
    } else {
      brands = 'Unknown Browser';
    }
  }

  if (userAgentData.mobile) {
    mobile = userAgentData.mobile ? 'Mobile' : 'Desktop';
  } else if (ua.includes('Mobi')) {
    mobile = 'Mobile';
  }

  const language = navigator.language;

  let locationInfo = 'Location: Unknown';
  
  try {
    const response = await fetch(`https://ipinfo.io/json?token=${process.env.NEXT_PUBLIC_IPINFO_API_TOKEN}`);
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    locationInfo = `*Location:* ${data.city}, ${data.region}, ${data.country}`;
  } catch (error) {
    //console.error('Error fetching location data:', error);
  }

  return `*Type:* ${mobile}, \n*Platform:* ${platform} , \n*Browser:* ${brands}, \n*Language:* ${language}, \n${locationInfo}, \n*User-Agent:* ${ua}`;
}

function UserActivityMonitor() {
  const [deviceInfo, setDeviceInfo] = useState('');

  useEffect(() => {
    // Fetch location data once when the component is mounted
    getDeviceAndLocationInfo().then(info => {
      setDeviceInfo(info);
    });
    

    const handleActivity = () => {
      const lastActive = sessionStorage.getItem('lastActiveTime');
      const now = Date.now();

      if (!lastActive || now - lastActive > 5 * 60 * 1000) { // 5 minutes
        notifySlack(`:bell: *Pling!* Someone is visiting the portfolio\n---\n${deviceInfo}`);
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
  }, [deviceInfo]);

  return null;
}

export default UserActivityMonitor;