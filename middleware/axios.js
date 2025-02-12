import axios from 'axios';
export default function (context) {
  axios.interceptors.request.use((config) => {
    if (!config.url.includes('api.arasaac.org') && !config.url.includes('flickr.com') && !config.url.includes('staticflickr.com')) {
      let token = localStorage.getItem('token');
      if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
      }
    }
    return config;
  },
    (error) => {
      return Promise.reject(error);
    });
}