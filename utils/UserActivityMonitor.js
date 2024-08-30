import { useEffect } from 'react';

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

function UserActivityMonitor() {
  useEffect(() => {
    const handleActivity = () => {
      const lastActive = sessionStorage.getItem('lastActiveTime');
      const now = Date.now();

      if (!lastActive || now - lastActive > 5 * 60 * 1000) { // 5 minutes
        notifySlack('A user is active on the website!');
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
  }, []);

  return null; // This component doesn't render anything visible
}

export default UserActivityMonitor;