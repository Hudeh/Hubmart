export const tokenConfig = getState => {
    // Get token
    const token = getState().authReducer.token;
  
    // Headers
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    if (token) {
      config.headers['Authorization'] = `Token ${token}`;
    }
  
    return config;
  };