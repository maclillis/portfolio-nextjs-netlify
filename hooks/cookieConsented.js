export const hasUserConsented = () => {
    return localStorage.getItem('trackingAllowed') === 'true';
  };