import axios from 'axios';

const API_URL = 'http://your-strapi-api-url.com';  // Replace with your Strapi API URL

export function fetchPosts() {
  return axios.get(`${API_URL}/posts`);
}

// Add more API functions here as needed...